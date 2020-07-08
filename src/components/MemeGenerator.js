import React from "react";
import "../App.css";

function MemeGenerator(props) {
  return (
    <div>
      <row>
        <form>
          <input className="col-5" />
          <span className="col-1"></span>
          <input className="col-5" />
          <br />
          <br />
          <button>Meme!</button>
        </form>
      </row>
      <br />
      <br />
      <row>{props.randomImage}</row>
    </div>
  );
}

export default MemeGenerator;
