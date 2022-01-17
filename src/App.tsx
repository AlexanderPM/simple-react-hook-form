import React, {useState} from 'react';
import './App.css';
import FormComponent from "./components/FormComponent";

function App() {
    const [formList, setValueFormList] = useState(['value #1']);
    const [formValue, setFormValue] = useState([]);
  return (
    <div className="App">
      <h2>Динамическая форма</h2>
        <FormComponent
            formList={formList}
            setValueFormList={setValueFormList}
            formValue={formValue}
            setFormValue={setFormValue}
        />
    </div>
  );
}

export default App;
