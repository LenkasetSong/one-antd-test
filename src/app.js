import React from 'react';
import ReactDOM from 'react-dom';
import { NewButton } from './components';
// import NewButton from 'ls-one-antd-test';

function App() {
  return (
    <NewButton name="新按钮" />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));