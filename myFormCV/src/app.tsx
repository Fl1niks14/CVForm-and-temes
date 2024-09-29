import React from 'react';
import CVForm from './component/FormCV/cvForm';
import './stayle/app.scss';
import ThemeToggle from './temes/temestogle'
import PdfGenerator from './component/PDFrecord/pdf'


const App: React.FC = () => {
  
	
	return (
    <div className="App">
      <CVForm />
			<ThemeToggle/>
			<PdfGenerator/>
    </div>
  );
}

export default App
