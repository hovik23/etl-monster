import './App.css';
import NavBar from './components/NavBar.js';
import SignUpForm from './components/SignUpForm.jsx'
import LoginTabs from './components/LoginTabs.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginTabs/>
    </div>
  );
}

export default App;
