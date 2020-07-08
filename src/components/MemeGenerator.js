import React from "react";
import "./MemeGenerator.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      img: "",
      allMemeImgs: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    console.log("Clickity clickty");
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("so you wanna submit?!?!?!?");
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randImg = this.state.allMemeImgs[randNum].url;
    console.log(this.state.allMemeImgs[randNum]);
    this.setState({
      img: randImg
    });
  }

  render() {
    return (
      <div>
        <row>
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <input className="col-5" name="topText" value="" />
            <span className="col-1"></span>
            <input className="col-5" />
            <br />
            <br />
            <button>Meme!</button>
          </form>
        </row>
        <br />
        <br />
        <row className="col-8 center">
          {this.state.img === "" ? null : (
            <img src={this.state.img} alt="meme pic"></img>
          )}
        </row>
      </div>
    );
  }
}

export default MemeGenerator;
