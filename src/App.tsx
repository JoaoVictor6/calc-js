import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './style/App.style';
import Theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={Theme.dark}>
      <Container>
        <main>
          <section className="notch">
            <div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path fill="#E4E9EE" fillRule="evenodd" d="M14 2.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V4.2A1.4 1.4 0 0114 2.8zM19.6 14a5.6 5.6 0 11-11.2 0 5.6 5.6 0 0111.2 0zm-.65 6.93l.99.99a1.4 1.4 0 001.98-1.98l-.99-.99a1.4 1.4 0 00-1.98 1.98zm2.968-14.85a1.4 1.4 0 010 1.98l-.988.99a1.4 1.4 0 11-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0h-.002zM23.8 15.4a1.4 1.4 0 100-2.8h-1.4a1.4 1.4 0 000 2.8h1.4zM14 21a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4A1.4 1.4 0 0114 21zM7.07 9.05a1.4 1.4 0 001.981-1.98l-.991-.99a1.4 1.4 0 00-1.98 1.98l.99.99zm1.98 11.88l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 1.98zM5.6 15.4a1.4 1.4 0 100-2.8H4.2a1.4 1.4 0 000 2.8h1.4z" clipRule="evenodd"/>
                </svg>
              </button>
              <button className='active'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path fill="#18ACEB" d="M24.21 18.61A11.2 11.2 0 019.39 3.79a11.201 11.201 0 1014.82 14.82z"/>
                </svg>
              </button>
            </div>
          </section>
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
