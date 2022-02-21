import React, {useState} from 'react';


export type MansType = {
  name: string,
  age: number,
  lessons: Array<{ title: string; name: string }>,
  address: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: MansType
  food: Array<string>
  car: {model: string}
}

// function useDimychState(message:string) {
//   return [message, useMessage]
// }

const Destructuring:React.FC<PropsType> = ({title, man, ...props}) => {

  // const {title} = props
  // const {name} = props.man
  // const {title, name, ...restProps} = props

 // const [nessage, useMessage]useState<string>('hey')

  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};

export default Destructuring;