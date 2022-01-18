import React from 'react';
import InputComponent from './InputComponent/InputComponent';
import './FormComponent.css';
import { FormState } from '../App';
import { useForm } from 'react-hook-form';

type Props = {
    formList: FormState[],
    setValueFormList: (newValue: FormState[]) => void,
    counter: number,
    setCounter: (newCounter: number) => void,
    initialState: FormState[]
}

const addLogo = '/icon/add.png';

function FormComponent({
  formList, setValueFormList, counter, setCounter, initialState,
}: Props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const addNewElement = () => {
    const newFormList = [...formList, { label: `label #${counter + 1}`, value: '' }];
    setValueFormList(newFormList);
    setCounter(counter + 1);
  };
  const deleteElement = (key: number) => {
    const newFormList = [...formList];
    newFormList.splice(key, 1);
    setValueFormList(newFormList);
  };
  const handleReset = () => {
    setValueFormList(initialState);
    setCounter(1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const editElement = event.target.name;
    const editValue = event.target.value;
    const newFormList = formList.map((item) => (item.label === editElement
      ? { label: editElement, value: editValue } : item));
    setValueFormList(newFormList);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={handleReset} className="app-form">
      {formList.map((item, index) => (
        <InputComponent
          item={item}
          key={item.label}
          id={index}
          deleteElement={deleteElement}
          onChange={handleChange}
          register={register}
        />
      ))}
      <button type="button" onClick={addNewElement} className="app-form-button-add">
        <label className="app-form-button-add-label">
          <img alt="" src={addLogo} className="app-form-button-add-label-logo" />
          Добавить поле
        </label>
      </button>
      <div className="app-form-button">
        <input type="submit" className="app-form-button-submit" value="Отправить" />
        <input type="reset" className="app-form-button-reset" value="Сбросить" />
      </div>
    </form>
  );
}

export default FormComponent;
