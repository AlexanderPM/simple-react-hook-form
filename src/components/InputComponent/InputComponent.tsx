import React from 'react';
import './InputComponent.css';
const removeLogo =  require("./icon/remove.png")


type Props = {
  id: number,
  item: string,
  deleteElement: (key: number) => void,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function InputComponent({id, item, deleteElement, onChange}: Props) {
    return (
      <div className="item-block">
        <label className='label'>{item}</label>
        <input name='input-component' className="input-component-textarea" onChange={onChange}/>
        <img alt='' src={removeLogo}  className='logoRemove' onClick={() => deleteElement(id)}/>
      </div>
    );
}

export default InputComponent;