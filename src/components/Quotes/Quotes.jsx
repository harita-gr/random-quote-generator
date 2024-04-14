import { Component } from "react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import Buttons from "../Buttons";
import axios from "axios";

class Quotes extends Component {
  state = {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    quotesData: [],
    color: "rgb(243,156,18)",
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) {
      return;
    } else {
      this.fetchQuotes();
    }
  }

  //Return diff color values
  randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  //Fetch quotes from API
  fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const color = this.randomColor(); // Assuming randomColor is a method that returns a color
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        this.setState({
          quotesData: quotesData,
          color: color,
        });
      })
      .catch((error) => console.log(error));
  };

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 16);
    let { quote, author } = this.state.quotesData[randomIndex];

    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      author: author,
      color: color,
    });
  };

  render() {
    return (
      <div id="quote-box">
        <QuoteText quote={this.state.quote} color={this.state.color} />
        <QuoteAuthor author={this.state.author} color={this.state.color} />
        <Buttons
          onClick={this.handleClick}
          color={this.state.color}
          quote={this.state.quote}
          author={this.state.author}
        />
      </div>
    );
  }
}

export default Quotes;
