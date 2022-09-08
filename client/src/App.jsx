import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Content from './components/Content.jsx';


function App() {
	const [activeTab, setActiveTab] = useState('')
	const [isLogged, setIsLogged] = useState(false)

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
