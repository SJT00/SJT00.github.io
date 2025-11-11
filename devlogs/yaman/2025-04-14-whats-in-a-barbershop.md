---
title: "Whats in a barbershop?"

date: "2025-04-14"
---

# Whats in a barbershop?

After many years of having lost my favourite barber - Don't worry, he's still alive just no idea where -, I finally found a new one to my liking. [Yaman Barber](https://g.co/kgs/KthPKET), a recently open local barbershop has just the right level of creativity and experience to know what I want without much being said. Due to the infancy of his business and the titular owners genuine kindness on my first visit, I wanted to help in whatever way I could (I'm not losing a barber again!!). So as a fun challenge and service I offered to develop his business and booking website, with the condition of being paid with a lifetime supply of free haircuts. He agreed and so its time to build!

Currently he has a default free square website which offers good integration with his Square POS but not much else as he would need to upgrade for something more personalized and aesthetic.

Take a look here:
![The current site!](https://res.cloudinary.com/dk5bzqz4o/image/upload/v1744654218/YamanPrevSite_njjcti.gif)

He was mainly unhappy with the its lack of icons, a gallery or a calendar view. Due to a lack of experience with web products, and not being comfortable with English yet, he's had a hard time looking for alternatives.

Note: Due to the considerable language barrier, I have to rely on understanding his design vision based off of very little, giving me more creative liberty but also a larger platform to fail from.

Which brings us to the system design portion of this project, I'll be following the [hello interview model](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery).

### Requirements:

- Functional:
  - Customers should be able to book time-slots and service.
  - Admin should be able to add/edit services offered and related prices.
  - Admin should be able to set barber's time-slots and availability.
  - Admin should be able to view a calendar view detailing all currently working barbers, their open and booked slots (plus slot relevant detail, what service respective barber is doing, to whom etc.).
- Non Functional:

  - Consistency >> Availability, customers should never be able to book unavailable slots, or have overlapping bookings.
  - Read >> Write, data will be more frequently read as barbers check for any new bookings, or customers for time-slot availability.
  - Certain holidays may have a burst of more customers, like Eid, Easter, etc. System should be able to keep up with occasional spikes.
  - Customer information doesn't require permanence, we only need their name and contact info until the end of their appointment, after which it may be dumped to free up space.
  - However, barber and services info needs to persist until revoked.
  - Perhaps the most crucial detail, **THIS SHOULD ALL BE FREE** relying on free tier of cloud platforms that allow for commercial use. Ideally I want to avoid even freemium tier services, as I wish to be able to host this without ever entering my bank information anywhere! This is why I will be deleting user info as we don't need users to login just basic contact info.

-      Outside of System Design:
      - Customers should be able to view shop website and view instagram portfolio, and contact info.

#### Calculations:

I believe some back of the envelope calculations are relevant here, since usually in interviews these are distributed systems with extreme loads, but my case is almost exactly the opposite. We are servicing one shop at one location, with limited clientele, estimating the small scale of this could be very useful in allowing me to know what I can use for free compute.

Yaman's currently has 2 barbers, and we can over estimate 20 unique daily customers. Each customer makes one booking once a day and we can estimate 20% of them edit or cancel their bookings a day. This would amount to:

    = 20*1.2 = 24 += 6 (accounting for barber/admin writes, availability/service changes etc.)
    = 30 Writes Daily

For reads we can assume a customer reads 3 times a day, repetitively checking for available slots. While barbers read to see their schedule updates every 30 minutes in a 12 hr work day.

    = 20*3 + 12*(60/30) = 60 + 24 = 84 Reads Daily

For booked slots we need to store the time-slot, barber id, customer name, contact info (email and/or number), and chosen service <<1kB so << 20kB daily stored blocks, <<600kB monthly. Note: this 600kB is given we don't dump user info daily, in reality persisted storage will never exceed 20kB if we dump daily.

This numbers are so small in-fact that could use in memory storage as my main database and don't even need distributed system thinking. Plus plenty of free cloud providers, specifically [Supabase](https://supabase.com/) offer much more than the needed level of service.

### Core Entities:

Lets see in terms of schemas I think I can avoid storing customers as a separate entry. We don't need them outside of their booked appointments, there are no saved accounts all we need for users is a way to book appointments, cancel them and move them. Funnily enough I think this might give us GDPR compliance without even trying (Right of Erasure).

Barber's info will be needed and needs to be editable, allowing for adjustments to schedule and removing/adding new barbers. Similarly for services which might change in pricing or get edited.

#### Time-Slot

- Time Range (start, end, duration)
- Barber ID
- IF Booked:
  - Service ID
  - Customer Name & Email
  - External Reference (Used in callback to edit/cancel said time-slot appointment)

#### Barber

- Name
- Contact Info
- Unavailability (Subtractive list of Time Ranges, when not working)

#### Services

- Name
- Price
- Duration

### API:

Note: {ids} will be in request headers, added to endpoints below for visualizing RESTful layout.

    ----------- BARBER -----------
    GET /barber/{barber-id} --> <Barber>

    PATCH /barber/{barber-id}
    {
       ...Partial<Barber>
    }

    POST /barber -->  barber-id
    {
       name,
       contact-info,
       unavailability-array?
    }

    DELETE /barber/{barber-id}

    ----------- Time-Slot -----------

    GET /time-slot/{time-slot-id} --> <Time-Slot>

    PATCH /time-slot/{time-slot-id}
    {
        ...Partial<Time-Slot>
    }

    POST /time-slot --> (time-slot-id, external-ref)
    {
       time-range,
       barber-id,
       service-id,
       customer-info
    }

    DELETE /time-slot/{time-slot-id}

    ----------- Services -----------

    GET /services/{service-id} --> <Service>

    POST /services --> service-id
    {
       service-name
       price
       duration
    }

    PATCH /services/{service-id}
    {
       ...Partial<Service>
    }

    DELETE /services/{service-id}

### High Level:

- Off the bat I know I want [Redis](http://redis.io/about/) for locking booking slots to prevent double books. I'll be using [Upstash's](https://upstash.com/) free tier as my Redis host as I am well under their size and bandwidth limits.
- Due to the small size and limited traffic I can afford to go server-less without paying for it particularly by utilizing [NextJS](https://nextjs.org/) across the stack, which helps my development experience too.
- I'll be relying on a PostgreSQL Supabase database, as I want atomicity and a single source of truth.
- I don't plan on adding payment for now, this will be done in store. In the future I **_may_** add square integration as thats what Yaman relies on.

![The System Design Diagram for this App](https://res.cloudinary.com/dk5bzqz4o/image/upload/v1744656443/Yaman_Sys_Design_oavtgg.png)

### Deep Dive:

- I'll be using Redis as both a lock check and a caching layer, every call to the db will first check in the Redis store, if not found it will check the main DB and write to the store for future reference. This will require some anti-staleness logic that I need to iron out.
- I will be hosting on [Cloudflare](https://www.cloudflare.com/) and utilizing their integration with NextJS to have my frontend on their extremely fast CDN, and my backend on their Workers (This should all fit comfortably within their free tier). They also provide good DDOS protection which is a great bonus.

### Next Steps:

- [ ] Design the needed views:
  - [x] Landing Page
  - [x] Booking Page
  - [x] Calendar Page
  - [ ] Admin\* Page
- [ ] Render above designs in React, working with mock API data:
  - [x] Landing
  - [ ] Booking
  - [x] Calendar
  - [ ] Admin\*
- [ ] Write up the SQL Schemas and host it on Supabase:
  - [x] Services
  - [x] Barbers
  - [ ] Time-Slots
- [ ] Complete the API layer:
  - [ ] Setup Redis Layer
  - [ ] Services
  - [ ] Barbers
  - [ ] Time-Slots
  - [ ] Test with DB
- [ ] Transition to Cloudflare hosting with their CDN and Workers
- [ ] TEST, Test, test....
- [ ] Present:
  - [ ] Give a full demo to Yaman
  - [ ] Transition from current website
  - [ ] Get a free haircut for dad and I ☺️

\*I'm debating the implementation of an Admin page mainly due to wanting to save on design and development time. The underlying api routes are more important than a frontend, and I could act as the default admin and add/remove barbers and services as need be unless Yaman requests over full-control.

At the time of writing I am working on finishing the front-end from Points `1` and `2`, with some pages done, the others are designed on [Canva](https://www.canva.com/) but need to be implemented. I'll be posting with more done within this week and hope to wrap this up quickly as my hairs starting to grow pretty long again 😂
