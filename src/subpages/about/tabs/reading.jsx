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
      commitments) I have found myself reading less and less. Recently I have
      been able to reignite this passion through the help of peer study and
      audiobooks.
      <br />
      <br />
      <h4>My Reading List: </h4>
      <div className="book">
        <span className="bookTitle current">
          {"The Autobiography of Benjamin Franklin"}
        </span>
        &nbsp;
        <span className="author">{"by Benjamin Franklin"}</span>
      </div>
      <div className="book">
        <span className="bookTitle finished">{"Pride and Prejudice"}</span>
        &nbsp;
        <span className="author">{"by Jane Austen"}</span>
      </div>
      <div className="book">
        <span className="bookTitle finished">{"Siddharta"}</span>
        &nbsp;
        <span className="author">{"by Herman Hesse"}</span>
      </div>
    </p>
  );
}
