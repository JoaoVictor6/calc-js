import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, OutputDiv } from './style/App.style';
import ThemeConfig, { ThemeOptions } from './style/theme';

type CurrentNumberInterface = {
  content: string
  isResult: boolean
}

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>('dark');
  const [calcHistory, setCalcHistory] = useState('');
  const [currentNumber, setCurrentNumber] = useState<CurrentNumberInterface>({
    content: '0', 
    isResult: false
  });
  const clickCalcHandler = () => {
    const value = currentNumber.content.split('');
    const symbol = currentNumber.content.match(/[+,\-,×,÷,%]/gm);

    if(value[value.length-1].match(/[+,\-,×,÷,%]/gm) || currentNumber.content === '0')return;
    if(!symbol && !value[value.length-1].match(/[0-9]/gm))return;
    
    const values = currentNumber.content.split(/[+,\-,×,÷,%]/gm);
    setCalcHistory(currentNumber.content);
    switch (symbol?.toString()) {
    case '%':
      setCurrentNumber({
        isResult: true, 
        content: (Number(values[0])*Number(values[1])/100)+''
      });
      break;
    case '×':
      setCurrentNumber({
        isResult: true, 
        content: (Number(values[0])*Number(values[1]))+''
      });
      break;
    case '-':
      setCurrentNumber({
        isResult: true, 
        content: (Number(values[0]) - Number(values[1]))+''
      });
      break;
    case '+':
      setCurrentNumber({
        isResult: true, 
        content: (Number(values[0]) + Number(values[1]))+''
      });
      break;
    case '÷':
      setCurrentNumber({
        isResult: true, 
        content: (Number(values[0]) / Number(values[1]))+''
      });
      break;
    default:
      break;
    }

  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const className = e.currentTarget.className;
    const number = e.currentTarget.textContent as string;
    
    if(!number.match(/[0-9,.]/gm) && !(currentNumber.content.match(/[+,\-,×,÷,%]/gm))){ 
      switch (className) {
      case 'percent':
        setCurrentNumber(old => {
          return {...old, content: old.content+'%'};
        });
        break;
      case 'multiplication':
        setCurrentNumber(old => {
          return {...old, content: old.content+'×'};
        });
        break;
      case 'subtraction':
        setCurrentNumber(old => {
          return {...old, content: old.content+'-'};
        });
        break;
      case 'sum':
        setCurrentNumber(old => {
          return {...old, content: old.content+'+'};
        });
        break;
      case 'division':
        setCurrentNumber(old => {
          return {...old, content: old.content+'÷'};
        });
        break;
      default:
        break;
      }
      return;
    }
    
    if (currentNumber.content === '0' && number === '.')return;
    if (currentNumber.content === '0' || currentNumber.isResult){
      setCurrentNumber({content: number+'', isResult: false});
      return;
    }
    if(!className){
      setCurrentNumber(old => {
        return {...old, content: old.content+(number+'')};
      });
    }
  };
  const RenderOutput = (content: string, subtitle = false) => {
    // the spread operator is a down level iteration, however, exists 
    //  other methods for parsing strings for an array
    const title = Array.from(content);
    if(subtitle){
      return(
        <h2>
          {title.map((char,index) => {
            if(char.match(/[+,\-,×,÷,%]/gm)){
              return <span key={`symbol_${index}`}> {char} </span>;
            }
            return char;
          })}
        </h2>
      );
    }
    
    return (
      <h1 className={
        content.split('').length >= 10 
          ? 'small' 
          : content.split('').length >= 13 
            ? 'xsmall'
            : ''}>
        {
          title.map((char,index) => {
            if(char.match(/[+,\-,×,÷,%]/gm)){
              return <span key={`symbol_${index}`}> {char} </span>;
            }
            return char;
          })
        }
      </h1>
    );
  };
  const backspaceHandler = () => {
    setCurrentNumber(old => {
      if(old.isResult){
        return {
          ...old,
          content: '0'
        };
      }

      return {
        ...old,
        content: old.content.slice(0,-1).length <= 1 ? '0'
          : old.content.slice(0,-1)
      };
    });
  };
  const clearAll = () => {
    setCurrentNumber({
      content: '0',
      isResult: false
    });
    setCalcHistory('');
  };
  return (
    <ThemeProvider theme={ThemeConfig[currentTheme]}>
      <Container>
        <main>
          <section className="notch">
            <div>
              <button 
                onClick={() => {setCurrentTheme('light');}}
                className={currentTheme === 'dark' ? '' : 'active'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path fill="#E4E9EE" fillRule="evenodd" d="M14 2.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V4.2A1.4 1.4 0 0114 2.8zM19.6 14a5.6 5.6 0 11-11.2 0 5.6 5.6 0 0111.2 0zm-.65 6.93l.99.99a1.4 1.4 0 001.98-1.98l-.99-.99a1.4 1.4 0 00-1.98 1.98zm2.968-14.85a1.4 1.4 0 010 1.98l-.988.99a1.4 1.4 0 11-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0h-.002zM23.8 15.4a1.4 1.4 0 100-2.8h-1.4a1.4 1.4 0 000 2.8h1.4zM14 21a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4A1.4 1.4 0 0114 21zM7.07 9.05a1.4 1.4 0 001.981-1.98l-.991-.99a1.4 1.4 0 00-1.98 1.98l.99.99zm1.98 11.88l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 1.98zM5.6 15.4a1.4 1.4 0 100-2.8H4.2a1.4 1.4 0 000 2.8h1.4z" clipRule="evenodd"/>
                </svg>
              </button>
              <button 
                onClick={() => {setCurrentTheme('dark');}}
                className={currentTheme === 'dark' ? 'active' : ''}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path fill="#18ACEB" d="M24.21 18.61A11.2 11.2 0 019.39 3.79a11.201 11.201 0 1014.82 14.82z"/>
                </svg>
              </button>
            </div>
          </section>
          <OutputDiv>
            {RenderOutput(calcHistory, true)}
            {RenderOutput(currentNumber.content)}
          </OutputDiv>
          <section className="buttons">
            <section className='dif-grid'>
              <button className='two-col'
                onClick={() => clearAll()}
              >
              AC
              </button>
              <button 
                onClick={() => backspaceHandler()}
                className='backspace'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="32" fill="none" viewBox="0 0 43 32">
                  <path fill="#F23057" fillRule="evenodd" d="M12.551 2.344A8 8 0 0118.207 0h16.46a8 8 0 018 8v16a8 8 0 01-8 8h-16.46a8 8 0 01-5.653-2.344L.781 17.886a2.666 2.666 0 010-3.771L12.55 2.344zm10.667 6.437a2.666 2.666 0 00-3.77 3.771L22.894 16l-3.448 3.448a2.667 2.667 0 103.771 3.77l3.448-3.447 3.448 3.448a2.667 2.667 0 003.77-3.771L30.438 16l3.448-3.448a2.667 2.667 0 00-3.77-3.77l-3.449 3.447-3.448-3.448z" clipRule="evenodd"/>
                </svg>
              </button>
              <button 
                className="percent"
                onClick={clickHandler} 
              >
              %
              </button>
            </section>
            <section className="normal-grid">
              <button onClick={clickHandler}
              >
              1
              </button>
              <button
                onClick={clickHandler}
              >
              2
              </button>
              <button
                onClick={clickHandler}
              >
              3
              </button>
              <button
                onClick={clickHandler}
                className='multiplication'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <path fill="#F23057" fillRule="evenodd" d="M10.303 10.303a2.4 2.4 0 013.394 0L24 20.606l10.303-10.303a2.4 2.4 0 113.394 3.394L27.394 24l10.303 10.303a2.4 2.4 0 01-3.394 3.394L24 27.394 13.697 37.697a2.4 2.4 0 01-3.394-3.394L20.606 24 10.303 13.697a2.4 2.4 0 010-3.394z" clipRule="evenodd"/>
                </svg>
              </button>
              <button
                onClick={clickHandler}
              >
              4
              </button>
              <button
                onClick={clickHandler}
              >
              5
              </button>
              <button
                onClick={clickHandler}
              >
              6
              </button>
              <button 
                className='subtraction'
                onClick={clickHandler}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="7" fill="none" viewBox="0 0 48 7">
                  <rect width="48" height="7" fill="#F23057" rx="3.5"/>
                </svg>
              </button>
              <button
                onClick={clickHandler}
              >
              7
              </button>
              <button
                onClick={clickHandler}
              >
              8
              </button>
              <button
                onClick={clickHandler}
              >
              9
              </button>
              <button
                onClick={clickHandler}
                className='sum'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <path fill="#F23057" fillRule="evenodd" d="M.63 20a2.4 2.4 0 012.4-2.4H17.6V3.03a2.399 2.399 0 114.8 0V17.6h14.57a2.4 2.4 0 010 4.8H22.4v14.57a2.4 2.4 0 01-4.8 0V22.4H3.03A2.4 2.4 0 01.63 20z" clipRule="evenodd"/>
                </svg>
              </button>
              <button
                onClick={clickHandler}
              >
              .
              </button>
              <button
                onClick={clickHandler}
              >
              0
              </button>
              <button
                onClick={clickCalcHandler}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="22" fill="none" viewBox="0 0 42 22">
                  <rect width="42" height="8" fill="#39E68A" rx="4"/>
                  <rect width="42" height="8" y="14" fill="#39E68A" rx="4"/>
                </svg>
              </button>
              <button
                onClick={clickHandler}
                className='division'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" fill="none" viewBox="0 0 42 46">
                  <rect width="42" height="6" y="20" fill="#F23057" rx="3"/>
                  <circle cx="20" cy="7" r="5" stroke="#F23057" strokeWidth="4"/>
                  <circle cx="20" cy="39" r="5" stroke="#F23057" strokeWidth="4"/>
                </svg>
              </button>
            </section>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}
