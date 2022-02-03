import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <Router>
    <App />
    </Router>,
  document.getElementById('root')
);
const moveindexup=()=>{
  return new Promise(resolve=>{
    document.getElementById('touch').style.transform='translateY(20px)';
    resolve('Loop-message:resolved first movement icon pointer');
  });
}
const moveindexdown = async()=>{
  const result = await moveindexup();
  console.log(result);
  setTimeout(() => {
    document.getElementById('touch').style.transform='translateY(0px)';
  },600);
  console.log('Loop-message:resolved second movement icon pointer');
}
setInterval(()=>{moveindexdown();},1200);
console.log('ma che cazz...');
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
