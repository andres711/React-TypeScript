import { Person } from '../types'

interface Props {
    list: Person[]
    quantity:number
}

const List = ({list,quantity}:Props) => {
  return (
    <div>
        <h3>Number of classmates :{quantity}</h3>
         <ul>
        {
          list.length>0?list.map(elem=>{
            return(
              <li key={elem.name}>
                <h4>{elem.name}</h4>
                <img src={elem.avatar} alt="avatar" />
                <h4>{elem.age}</h4>
                <h4>{elem.gradeYear}</h4>
                <h4>{elem.description}</h4>
              </li>
            )
            
          })
          :<p>lista vacia</p>
        }
      </ul>
    </div>
   
  )
}

export default List