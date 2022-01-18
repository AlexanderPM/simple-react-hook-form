import React from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from './InputComponent/InputComponent';
import './FormComponent.css';
import { FormState } from '../App';

type Props = {
    formList: FormState[],
    setValueFormList: (newValue: FormState[]) => void,
    counter: number,
    setCounter: (newCounter: number) => void,
}

const addLogo = '/icon/add.png';

function FormComponent({
  formList, setValueFormList, counter, setCounter,
}: Props) {
  const methods = useForm();
  const onSubmit = (data: Record<string, string>) => {
    // eslint-disable-next-line no-console
    console.log(data);
    methods.reset();
  };

  const addNewElement = () => {
    const newFormList = [...formList, { label: `label #${counter + 1}` }];
    setValueFormList(newFormList);
    setCounter(counter + 1);
  };
  const deleteElement = (key: number, label: string) => {
    const newFormList = [...formList];
    newFormList.splice(key, 1);
    setValueFormList(newFormList);
    methods.unregister(label);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="app-form">
      {formList.map((item, index) => (
        <InputComponent
          item={item}
          key={item.label}
          id={index}
          deleteElement={deleteElement}
          register={methods.register}
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
        <input type="button" className="app-form-button-reset" value="Сбросить" onClick={() => methods.reset()} />
      </div>
    </form>
  );
}

export default FormComponent;
