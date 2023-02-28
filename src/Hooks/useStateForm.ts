import { Person } from "../types";
import { useReducer } from "react";

const initialState ={
    name:"",
    age:0,
    avatar:"",
    gradeYear:0,
    description:""
};

type FormReducerAction = {
    type:"Change values",
    payload:{
        inputName:string,
        inputValue:string
    }
}|{
    type:"Clear form"
};

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

export const useStateForm = useReducer(formReducer,initialState);

