import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  transition: .1s all; 
  background: ${prop => prop.theme.background};
  display: grid;
  place-content: center;
  main {
    background: ${prop => prop.theme.backgroundCalc};
    border-radius: 20px;
    box-shadow: 1px 2px 15px 0px rgba(0,0,0,0.25);
    position: relative;

    .notch {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      div {
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2);
        padding: 8px 18px;
        border-radius: 0 0 12px 12px; 
        background: ${prop => prop.theme.backgroundKeyboard};
        display: flex;
        justify-content: center;
        gap: 18px;

        button > svg > path {fill: ${prop => prop.theme.textColorButtons};}
        button.active > svg > path{fill: ${prop => prop.theme.blue};}
      }
    }
  }
  .output {
    height: 272px;
    color: ${prop => prop.theme.textColorOutput};
    font-size: 52px;
    margin-bottom: 16px;
    padding: 0 24px;
    
    display: flex;
    flex-direction: column;
    justify-content: end;
    * {
      width: 100%;
      text-align: right;
    }
    h2 {
      font-size: 46px;
      margin-bottom: 12px;
    }
    h2 > span {
      color: ${prop => prop.theme.red};
    }
  }

  .buttons {
    padding: 28px 22px;
    background: ${prop => prop.theme.backgroundKeyboard};
    border-radius: 32px 32px 20px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 18px;

    button {
      width: 80px;
      height: 80px;
      line-height: 48px;
      font-size: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${prop => prop.theme.textColorButtons};
      border-radius: 8px;
      background: ${prop => prop.theme.backgroundButton};
      box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.2);
      box-shadow: 0px 1px 10px 1px rgba(229,229,229,0.01);
    }
  }
`;
