import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';


const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// setInterval( () => {
//   root.render(
//     <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }, 1000);

  root.render(
    <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
  );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
