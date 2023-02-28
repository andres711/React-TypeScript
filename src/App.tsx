import { Dispatch, SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Person } from './types'
import List from './Components/List'
import Form from './Components/Form'


interface AppState {
  classmates:Array<Person>
  numOfClassmates:number
}
const initialState = [
  {
    name:"Andres",
    age: 26,
    gradeYear: 5,
    avatar :"https://i.pravatar.cc/150?u=andres"
  }
]

function App() {

  const [classmates,setClassmates] = useState<AppState["classmates"]>(initialState);
  const [quantity,setQuantity] = useState<number>(classmates.length);
  const handleClassmate = (newClassmate:Person):void =>{
    setClassmates(classmates => [...classmates,newClassmate])
  }
  const handleQuantity = ():void=>{
    setQuantity(quantity=> quantity++)
  }

  return (
    <div >
      <h2>{quantity}</h2>
      <List list={classmates} quantity={quantity}/>
      <Form addClassmates={handleClassmate} increment={()=>handleQuantity} />
      <button onClick={()=>setQuantity(quantity=>quantity)}>
        incremet quantity
      </button>
    </div>
  )
}

export default App
