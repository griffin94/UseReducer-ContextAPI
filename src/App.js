import Todo from './components/Todo';
import { createGlobalStyle } from 'styled-components';
import { StateProvider } from './state/StateProvider';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'sans-serif'
  }
`;

function App() {
  return (
    <StateProvider>
      <GlobalStyle />
      <Todo />
    </StateProvider>
  );
}

export default App;
