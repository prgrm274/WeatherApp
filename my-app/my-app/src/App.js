import logo from './logo.svg';
import './App.css';
import './index.css'

import MyForm from './form1';

import Weather from './comps/Weather'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a> */}

        {/*  */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue"
          }}
        >
        {/* <button onClick={() => alert("hello")}>alert hello</button> */}
        </div>
        
        This is written in Langar font
        
        <div>
          <form>
            <label>
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />_
            <label>
              <input type="text" name="name" />
            </label>_
            <label>
              <input type="text" name="name" />
            </label>
          </form>
        </div>

        <MyForm></MyForm>
        <div className="MyForm">
        </div>

        <Weather />

      </header>

    </div>
  );
}




// 

export default App;
