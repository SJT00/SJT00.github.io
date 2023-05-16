import React from "react";

export default function reading() {
  return (
    <p>
      <h4>Preface: </h4>
      Being the grandson of an author and the son of a professor, reading has
      always been a hobby I valued. Reading abdriged versions of Huckleberry
      Finn, Sherlock Holmes, and Dickens used to be a daily activity for me.
      <br />
      <br />
      Yet, since my adoption of technology (along with deeper academic
      commitments) I have found myself reading less and less. However, recently
      I have been able to reignite this passion through the help of peer study
      and audiobooks.
      <br />
      <br />
      <h4>My Reading List: </h4>
      <div className="book">
        <span className="bookTitle">{"Siddharta"}</span>
        &nbsp;
        <span className="author">{"by Herman Hesse"}</span>
      </div>
      <div className="book current">
        <span className="bookTitle">{"Pride and Prejudice"}</span>
        &nbsp;
        <span className="author">{"by Jane Austen"}</span>
      </div>
      <div className="book">{"TBD"}</div>
    </p>
  );
}
