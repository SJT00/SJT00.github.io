---
title: "Hello World"

date: "2025-04-10"
---

# Hello World?

For the first of (hopefully) many entries, I'll be covering how I integrating these logs into my website.

The structure of these reports will remain fluid for a bit as I identify patterns in my chain of thought and can hopefully make it more formulaic.

For now I've settled on starting from requirements, dictating the process and identifying flaws and improvements.

### Requirements:

1. Be able to write dev logs without having to worry about HTML or styling, in a format that is simple and quick to write.

2. Be able to still add images, diagrams, bullet points etc. when needed similar to writing any word doc.

3. Ensure logs are inline with my theme, in terms of font, colours, and styling etc. without per log adjustments.

4. Have writing dev logs be decoupled from other website functionality. To the point where a non-technical person should be able to edit/submit one.

5. Find a creative and aesthetically pleasing (at least to me) way to display multiple selectable logs from a list.

### Process:

Points `1` and `2` immediately made me think of [**Markdown**](https://en.wikipedia.org/wiki/Markdown), its basically writing a text document with a little bit of needed flourish. Its simple enough for a non dev to write, and practically a given for quickly writing documentation on the web.

Point `3` required that I transform the Markdown **`.md`** format to an HTML friendly one and then apply the same styling that I use for all my components. [React Markdown](https://github.com/remarkjs/react-markdown) already handles conversion to HTML tags, and styling gets applied to those automatically, this was incredibly plug and play.

Point `4` was in the trickiest and most critical of the bunch, mainly because there are a lot of options to choose from here, do I use an external repo to store dev logs and fetch from there? Perhaps I use a Markdown CMS that is hosted elsewhere allowing me to edit and push in one go. For now I've settled on making a separate dev logs folder, which Gatsby - The React Framework this site is built on - statically queries at build time, allowing for quick retrieval at runtime. I may use this folder to store relevant media files as well, but I hesitate to do this for now, as I can rely on urls to fetch media while not having to host it myself. I decided on not using a separate repo mainly due to not wanting a public repo with just my blog posts (for now), mainly because I like to keep my git projects limited.

Point `5` required some creative thinking, but in a moment of serendipity I recalled a technical assessment I was given. The assessment was to make api calls to read repetitively from a file streams, for the sake of rendering a "file tree":
![An image of a "file tree" structure, with directory file and folders allowing you to view and access multiple files from the left and view the files' contents on the right](https://code.visualstudio.com/assets/api/ux-guidelines/examples/tree-view.png)

> ~~TODO: Add an image for above, use the explanatory text as alt text~~

This was it! A file tree offers both a easily graspable way to select and view different files, while simultaneously displaying its contents in a code editor like fashion. To accomplish this I used a handy and easily stylized [react-accessible-treeview](https://www.npmjs.com/package/react-accessible-treeview) component along with some state management to incorporate this. Then I use the previously mentioned React Markdown to render the right side of the view and ta-da! we have a vscode clone.

The overall solution required me to learn more about Gatsby, format GraphQL queries, use said queries to abstract and formulate a file tree, and then display said tree and its elements via React state. The abstraction comes from wanting the file tree to be able to read the dev logs folder and copy over its internals in an identical fashion (for markdown files and their ancestors at least).

So an external non tech-savy editor could modify the dev logs folders and they should still be correctly ordered and displayed.

### Major Flaws:

- No pagination, at build time Gatsby is fetching all the files in /devlogs, ordering them and including it in the bundle it sends to the client upon entering this page, _could be horrible for client-side memory as folder size grows_.

- My styling preference for this website is to keep consistent limited size components. So for example: the right folder tree doesn't ever go beyond its starting width, similar for the left text view. However for deeper folder structures horizontal scrolling might be an issue, similarly for longer text it maybe be annoying to scroll through (saving scroll position locally could be a good temp solution).

- Some form of lazy loading may be needed if I rely on urls to load media etc.

### Future Plans:

- [x] Find a storage solution for media, maybe Google drive or Cloudinary?

- [ ] Integrate cards in showcase with this section by adding a button on the relevant card that scrolls the relevant dev logs folder into view.

- [x] For the above add a way to use uri ecnoding to directly go to relevant dev log, allowing quick links for future references in a format like `SiteURL/#devlog:{name}`.

- [ ] Add a contact me button somewhere for any curious bystanders.

- [ ] Measure and compare performance of this page in general and this section in particular.

- [ ] Maybe... just maybe setup some kind of CI for online Markdown editor to allow for not even needing to push to git repo
