import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Content from './components/Content.jsx';

function App() {
	const [activeTab, setActiveTab] = useState('')

	return (
		<div className="App">
			<NavBar
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<Content
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</div>
	);
}

export default App;
