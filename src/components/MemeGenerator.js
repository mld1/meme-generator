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
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
            <input
              onChange={this.handleChange}
              className="col-5"
              name="topText"
              value={this.state.topText}
            />
            <span className="col-1"></span>
            <input
              value={this.state.bottomText}
              name="bottomText"
              onChange={this.handleChange}
              className="col-5"
            />
            <br />
            <br />
            <button>Meme!</button>
          </form>
        </row>
        <br />
        <br />
        <row className="col-8 center meme">
          {this.state.img === "" ? null : (
            <img src={this.state.img} alt="meme pic"></img>
          )}
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </row>
      </div>
    );
  }
}

export default MemeGenerator;
