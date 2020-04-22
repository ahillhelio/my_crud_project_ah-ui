import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Province from './src/tc_provinces';

const Main = () => {
  return (
    <React.StrictMode>
      <Province/>
    </React.StrictMode>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
