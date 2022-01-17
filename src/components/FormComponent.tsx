import InputComponent from "./InputComponent/InputComponent";
import React from "react";
import "./FormComponent.css"
const addLogo =  require("./InputComponent/icon/add.png")

type Props = {
    formList: string[],
    setValueFormList: (newValue: string[]) => void,
    formValue: string[],
    setFormValue: (value: any) => void,
}

const FormComponent = ({formList, setValueFormList, formValue, setFormValue}: Props) => {
    const addNewElement = () => {
        const newFormList = [...formList, 'value #' + (formList.length + 1)];
        setValueFormList(newFormList)
    }
  const deleteElement = (key: number) => {
    const newFormList = [...formList];
    newFormList.splice(key, 1);
    setValueFormList(newFormList)
  }
  const handleSubmit = (event: any) => {
    alert("привет!")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...formValue, { value: event.target.value }];
  }
    return(
        <>
            <form onSubmit={handleSubmit} className="form-app">
                {formList.map((item, index) =>
                    <InputComponent item={item} key={index} id={index} deleteElement={deleteElement} onChange={handleChange}/>
                )}
              <label onClick={addNewElement} className="label-add"><img alt='' src={addLogo}  className='add-logo' /> Добавить поле</label>
              <input type="submit" className="submit-button" value='Отправить'/>
            </form>
        </>
    );
}

export default FormComponent;
