import React from 'react';
import './InputComponent.css';

import { FormState } from '../../App';

type Props = {
  id: number,
  item: FormState,
  deleteElement: (key: number) => void,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const removeLogo = '/icon/remove.png';

function InputComponent({
  id, item, deleteElement, onChange,
}: Props) {
  return (
    <label className="app-form-item">
      <span className="app-form-item-label">{item.label}</span>
      <input name={item.label} className="app-form-item-input" value={item.value} onChange={onChange} />
      <button type="button" onClick={() => deleteElement(id)} className="app-form-item-remove-button">
        <img alt="" src={removeLogo} className="app-form-item-remove-button-logo" />
      </button>
    </label>
  );
}

export default InputComponent;
