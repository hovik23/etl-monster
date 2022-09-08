import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Content from './components/Content.jsx';
import Cookies from 'universal-cookie';

function App() {
	const cookies = new Cookies()

	const [activeTab, setActiveTab] = useState('')
	const [isLogged, setIsLogged] = useState(cookies.get('access_token') ? true : false)

	return (
		<div className="App">
			<NavBar
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				isLogged={isLogged}
			/>
			<Content
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				isLogged={isLogged}
				setIsLogged={setIsLogged}
			/>
		</div>
	);
}

export default App;
