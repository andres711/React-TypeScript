import {useReducer} from 'react'
import { Person } from '../types'

interface Props{
    addClassmates:(classmate:Person)=> void
    increment :()=>void
}
const initialState ={
    name:"",
    age:0,
    avatar:"",
    gradeYear:0,
    description:""
}
type FormReducerAction = {
    type:"Change values",
    payload:{
        inputName:string,
        inputValue:string
    }
}|{
    type:"Clear form"
}

const formReducer = (state:Person, action:FormReducerAction)=>{
    switch(action.type){    
        case "Change values":
        {
            const { inputName,inputValue} = action.payload
            return{
                ...state,
                [inputName] : inputValue
            }
        }
        case "Clear form":
        {
            return initialState;
        }
    }
}

const Form = ({addClassmates,increment}:Props) => {

    const [inputValues,dispatch] = useReducer(formReducer,initialState);
    
    const{name, age, avatar, gradeYear, description} = inputValues;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        dispatch({
            type:"Change values",
            payload:{
                inputName:e.target.name,
                inputValue:e.target.value
            }
        })
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(name ==="" || avatar===""){
            alert("complete campos name y avatar")
        }
        else{
            addClassmates(inputValues)
            increment()
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input  type="text" onChange={handleChange} name='name'value={name}  placeholder="Name.." />
        <label>Age</label>
        <input type="number" name='age'onChange={handleChange} value={age} />
        <label>Avatar</label>
        <input type="text" onChange={handleChange} name='avatar'value={avatar}  placeholder="Avatar.." />
        <label>Grade Year</label>
        <input type="number" name='gradeYear' onChange={handleChange} value={gradeYear}/>
        <label>Description</label>
        <textarea name="description" onChange={handleChange}  value={description} ></textarea>
        <button>Add classmate</button>
    </form>
  )
}

export default Form