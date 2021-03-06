import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {client} from './ApolloClient/client';
import CreateJob from './createJob';

function App() {
  return (
    <ApolloProvider client={client}>
      <CreateJob/>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </ApolloProvider>
  );
}

export default App;
