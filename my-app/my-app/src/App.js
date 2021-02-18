import logo from './logo.svg';
import './App.css';
import './index.css'

import MyForm from './form1';

import Weather from './comps/Weather'
import FormStyle1 from './comps/Style1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        
        <FormStyle1>
          <div>
            <form horizontal>
              <label>
                <input type="text" name="name" />
              </label>
              {/* <input type="submit" value="Submit" />_ */}
              <label>
                <input type="text" name="name" />
              </label>
            <label>
                <input type="text" name="name" />
              </label>
            </form>
          </div>
        </FormStyle1>
        <br/>

        {/* <MyForm></MyForm> */}
        {/* <div className="MyForm"/> */}

        <FormStyle1>
          <Weather />
        </FormStyle1>

      </header>

    </div>
  );
}




// 

export default App;
