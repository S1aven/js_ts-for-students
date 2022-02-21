import React, {ChangeEvent, MouseEvent} from "react";

const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.name)
}

const search = (e: MouseEvent<HTMLButtonElement>) => {
  alert(e.currentTarget.value)
}

const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
  console.log('age changed ' + e.currentTarget.value)
}

const onNameChange = () => {
  console.log('name changed')
}

const onBlur = () => {
  console.log('blur')
}

export const User = () => {
  return (
    <div>
      <textarea onChange={onNameChange} onBlur={onBlur}>Dimych</textarea>
      <input type={"number"} onChange={onAgeChanged}/>
      <button name={'delete'} onClick={deleteUser}>delete</button>
      <button name={'save'} onClick={search}>search</button>
    </div>
  )
}