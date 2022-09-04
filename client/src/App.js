import './App.css';
import NavBar from './components/NavBar.js';
import SignUpForm from './components/SignUpForm.jsx'
import LoginTabs from './components/LoginTabs.jsx'
import Account from './components/Account.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
          <div className="row">
              <div className="col-sm-10 mx-auto">
                <LoginTabs/>
                {/*<Account/>*/}
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
