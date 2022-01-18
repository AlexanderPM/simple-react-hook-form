import React from 'react';
import './InputComponent.css';
import { FormState } from '../../App';

type Props = {
  id: number,
  item: FormState,
  deleteElement: (key: number, label: string) => void,
  register: (value: string) => void,
}

const removeLogo = '/icon/remove.png';

function InputComponent({
  id, item, deleteElement, register,
}: Props) {
  return (
    <label className="app-form-item">
      <span className="app-form-item-label">{item.label}</span>
      <input
        {...register(item.label)}
        className="app-form-item-input"
      />
      <button type="button" onClick={() => deleteElement(id, item.label)} className="app-form-item-remove-button">
        <img alt="" src={removeLogo} className="app-form-item-remove-button-logo" />
      </button>
    </label>
  );
}

export default InputComponent;
