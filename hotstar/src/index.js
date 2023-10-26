import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import LeftHeader from './component/Left_header';
import AdSection from './component/Ad_section';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<LeftHeader />
<div className='MainSection'>
<AdSection/>
<App/>
</div>
  
  </>
);


