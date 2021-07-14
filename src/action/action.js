import React from 'react';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

/* eslint-disable eqeqeq */
class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: alphabet,
    };
  }
  updatedMarkdown = function (markdown) {
    this.setState({
      markdown,
    });
  };
  render() {
    const rot13 = (str) => {
      let accumulator = [];
      for (var i = 0; i < str.length; i++) {
        const charac = [str[i]];
        const isLetter = alphabet.includes(str[i]);
        if (!isLetter) {
          accumulator += charac;
        } else {
          const isFind = alphabet.findIndex((c) => c == charac);
          accumulator += alphabet[isFind + 13] || alphabet[isFind - 13];
        }
        console.log(accumulator);
      }
      return accumulator;
    };
    return (
      <div>
        <input
          style={{ width: '500px' }}
          placeholder={'Enter text'}
          onChange={(event) => {
            this.updatedMarkdown(event.target.value);
          }}
        ></input>
        <div
          dangerouslySetInnerHTML={{
            __html: rot13(this.state.markdown),
          }}
        ></div>
      </div>
    );
  }
}

export default Action;
