import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './style/App.style';
import Theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={Theme.dark}>
      <Container>
        <main>
          <section className="output">
            <h2>100 <span>-</span> 7</h2>
            <h1>993</h1>
          </section>
          <section className="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <path fill="#F23057" fillRule="evenodd" d="M10.303 10.303a2.4 2.4 0 013.394 0L24 20.606l10.303-10.303a2.4 2.4 0 113.394 3.394L27.394 24l10.303 10.303a2.4 2.4 0 01-3.394 3.394L24 27.394 13.697 37.697a2.4 2.4 0 01-3.394-3.394L20.606 24 10.303 13.697a2.4 2.4 0 010-3.394z" clipRule="evenodd"/>
              </svg>
            </button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="7" fill="none" viewBox="0 0 48 7">
                <rect width="48" height="7" fill="#F23057" rx="3.5"/>
              </svg>
            </button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                <path fill="#F23057" fillRule="evenodd" d="M.63 20a2.4 2.4 0 012.4-2.4H17.6V3.03a2.399 2.399 0 114.8 0V17.6h14.57a2.4 2.4 0 010 4.8H22.4v14.57a2.4 2.4 0 01-4.8 0V22.4H3.03A2.4 2.4 0 01.63 20z" clipRule="evenodd"/>
              </svg>
            </button>
            <button>.</button>
            <button>0</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="22" fill="none" viewBox="0 0 42 22">
                <rect width="42" height="8" fill="#39E68A" rx="4"/>
                <rect width="42" height="8" y="14" fill="#39E68A" rx="4"/>
              </svg>
            </button>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" fill="none" viewBox="0 0 42 46">
                <rect width="42" height="6" y="20" fill="#F23057" rx="3"/>
                <circle cx="20" cy="7" r="5" stroke="#F23057" strokeWidth="4"/>
                <circle cx="20" cy="39" r="5" stroke="#F23057" strokeWidth="4"/>
              </svg>
            </button>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
