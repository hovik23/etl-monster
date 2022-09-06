import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Content from './components/Content.jsx';

function App() {
	const [activeTab, setActiveTab] = useState('')
	const [tables, setTables] = useState({})

	return (
		<div className="App">
			<NavBar
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				tables={tables}
				setTables={setTables}
			/>
			<Content
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				tables={tables}
			/>
		</div>
	);
}

export default App;
