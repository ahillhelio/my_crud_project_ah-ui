import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Province from './src/tc_provinces';
import CreateProvinceForm from './src/createprovinceform'

const Main = () => {
  return (
    <React.StrictMode>
      <Province/>
      <CreateProvinceForm/>
    </React.StrictMode>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
