import Todo from './components/Todo';
import { createGlobalStyle } from 'styled-components';

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
    <div className='App'>
      <GlobalStyle />
      <Todo />
    </div>
  );
}

export default App;
