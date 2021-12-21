import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  background: ${prop => prop.theme.background};
  display: grid;
  place-content: center;
  main {
    background: ${prop => prop.theme.backgroundCalc};
    border-radius: 20px;
  }
  .output {
    color: ${prop => prop.theme.textColorOutput};
    font-size: 52px;
    margin-bottom: 16px;
    padding: 0 24px;
    * {
      text-align: right;
    }
    h2 {
      font-size: 46px;
      margin-bottom: 12px;
      margin-top: 100px;
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