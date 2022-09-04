import './App.css';
import NavBar from './components/NavBar.js';
import LoginTabs from './components/Auth/LoginTabs.jsx'
// import Account from './components/Account.jsx'
import ETLRoot from './components/ETL/ETLRoot.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
          <div className="row">
              <div className="col-sm-10 mx-auto">
                <ETLRoot/>
                {/*<LoginTabs/>*/}
                {/*<Account/>*/}
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
