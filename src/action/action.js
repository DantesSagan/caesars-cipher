import React from 'react';
import Counter from './counter';

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
const russianUpper = [
  'A',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ь',
  'Э',
  'Ю',
  'Я',
];

/* eslint-disable eqeqeq */
class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: alphabet,
      randomIndex: '',
    };
  }
  updatedMarkdown = function (markdown) {
    this.setState({
      markdown,
      randomIndex: Math.floor(Math.random() * 15),
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
        console.log();
      }
      return accumulator;
    };
    return (
      <div
        className='justify-items-center grid grid-col-3 gap-4'
        style={{ marginTop: '350px' }}
      >
        <div
          className=' rounded-xl shadow-md overflow-hidden p-4'
          style={{ float: 'left', backgroundColor: 'green' }}
        >
          <textarea
            style={{ width: '350px' }}
            placeholder={'Enter text'}
            onChange={(event) => {
              this.updatedMarkdown(event.target.value);
            }}
          ></textarea>
        </div>
        <Counter />
        <div
          className='bg-transparent rounded-xl shadow-md p-4'
          style={{
            float: 'right',
            backgroundColor: 'red',
            fontStyle: 'italic',
            color: 'whitesmoke',
          }}
        >
          <div
            contentEditable='true'
            placeholder={'You output'}
            style={{ width: '350px' }}
            dangerouslySetInnerHTML={{
              __html: rot13(this.state.markdown),
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Action;
