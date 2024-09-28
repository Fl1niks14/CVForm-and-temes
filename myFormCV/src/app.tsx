import React from 'react';
import CVForm from './component/cvForm';
import './stayle/app.scss';
import ThemeToggle from './temes/temestogle'



const App: React.FC = () => {
  
	
	return (
    <div className="App">
      <CVForm />
			<ThemeToggle/>
    </div>
  );
}

export default App
