import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string
    green: string
    blue: string
    background: string
    backgroundCalc: string
    backgroundKeyboard: string
    textColorButtons: string
    textColorOutput: string
    backgroundButton: string
  }
}