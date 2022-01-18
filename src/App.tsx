import React, { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';

export interface FormState {
  label: string,
}

const initialState : FormState[] = [
  { label: 'label #1' },
];

function App() {
  const [counter, setCounter] = useState(1);
  const [formList, setValueFormList] = useState(initialState);
  return (
    <div className="app">
      <h2>Динамическая форма</h2>
      <FormComponent
        formList={formList}
        setValueFormList={setValueFormList}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;
