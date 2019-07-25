import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import twitter from './css/images/twitter.png';
import quotes from './css/images/quotes.png';
import './css/main.css';
import {
  COLORFULBUTTON,
  COLORFULTEXT,
  COLORFULBG
} from './constants/constants';

class App extends React.Component {
  state = {
    quote: '',
    author: '',
    id: null,
    color: Math.floor(Math.random() * 7)
  };

  componentWillMount() {
    axios
      .get('http://quotes.stormconsultancy.co.uk/random.json')
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          id: response.data.id
        });
      });

    if (this.state.color === 0) {
      document.getElementsByTagName('body')[0].className = 'bg-primary';
    } else if (this.state.color === 1) {
      document.getElementsByTagName('body')[0].className = 'bg-secondary';
    } else if (this.state.color === 2) {
      document.getElementsByTagName('body')[0].className = 'bg-success';
    } else if (this.state.color === 3) {
      document.getElementsByTagName('body')[0].className = 'bg-danger';
    } else if (this.state.color === 4) {
      document.getElementsByTagName('body')[0].className = 'bg-warning';
    } else if (this.state.color === 5) {
      document.getElementsByTagName('body')[0].className = 'bg-info';
    } else if (this.state.color === 6) {
      document.getElementsByTagName('body')[0].className = 'bg-dark';
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.color === 0) {
      document.getElementsByTagName('body')[0].className = 'bg-primary';
    } else if (nextState.color === 1) {
      document.getElementsByTagName('body')[0].className = 'bg-secondary';
    } else if (nextState.color === 2) {
      document.getElementsByTagName('body')[0].className = 'bg-success';
    } else if (nextState.color === 3) {
      document.getElementsByTagName('body')[0].className = 'bg-danger';
    } else if (nextState.color === 4) {
      document.getElementsByTagName('body')[0].className = 'bg-warning';
    } else if (nextState.color === 5) {
      document.getElementsByTagName('body')[0].className = 'bg-info';
    } else if (nextState.color === 6) {
      document.getElementsByTagName('body')[0].className = 'bg-dark';
    }
  }

  indexGenerate = () => {
    axios
      .get('http://quotes.stormconsultancy.co.uk/random.json')
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          id: response.data.id,
          color: Math.floor(Math.random() * 7)
        });
      });
  };

  render() {
    const generateBtnColor = COLORFULBUTTON[this.state.color];
    const generateTxtColor = COLORFULTEXT[this.state.color];
    const generateBgColor = COLORFULBG[this.state.color];

    if (this.state.quote) {
      return (
        <CSSTransitionGroup
          key={this.state.id}
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div id="quote-box">
            <div>
              <h2 className={generateTxtColor} id="text">
                <img
                  className={generateBgColor}
                  id="quote-image"
                  src={quotes}
                  alt=""
                />
                {this.state.quote}
              </h2>
              <h3 className={generateTxtColor} id="author">
                {this.state.author}
              </h3>
            </div>

            <button
              className={generateBtnColor}
              onClick={this.indexGenerate}
              id="new-quote"
            >
              New quote
            </button>
            <div id="tweet-box">
              <a
                target="_blank"
                rel="noopener noreferrer"
                id="tweet-quote"
                href={
                  'https://twitter.com/intent/tweet?text=' +
                  '"' +
                  this.state.quote +
                  '"' +
                  ' ' +
                  this.state.author
                }
              >
                <img className={generateBgColor} src={twitter} alt="" />
              </a>
            </div>
          </div>
        </CSSTransitionGroup>
      );
    } else {
      return (
        <CSSTransitionGroup
          key={this.state.id}
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div id="quote-box">
            <h2 className={generateTxtColor} id="text">
              <img
                className={generateBgColor}
                id="quote-image"
                src={quotes}
                alt=""
              />
              {this.state.quote}
            </h2>
            <h3 className={generateTxtColor} id="author">
              {this.state.author}
            </h3>

            <button
              className={generateBtnColor}
              onClick={this.indexGenerate}
              id="new-quote"
            >
              New quote
            </button>
            <div id="tweet-box">
              <a
                target="_blank"
                rel="noopener noreferrer"
                id="tweet-quote"
                href={
                  'https://twitter.com/intent/tweet?text=' +
                  '"' +
                  this.state.quote +
                  '"' +
                  ' ' +
                  this.state.author
                }
              >
                <img className={generateBgColor} src={twitter} alt="" />
              </a>
            </div>
          </div>
        </CSSTransitionGroup>
      );
    }
  }
}

export default App;
