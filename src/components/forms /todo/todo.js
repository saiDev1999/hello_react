import { useState } from "react"





const TodoList =()=>{
    const[list,setList]=useState([])
    const[input,setInput]=useState("")
    const[count,setCount]=useState(0)
    const handleChange=(event)=>{
        setInput(event.target.value)

    }
    const handleClick=()=>{
        const newList = [...list,input]
        setList(newList)
        setCount(count+1)
    }

    const handleRemove=(index)=>{
  console.log(index)
  console.log(list)
    }
    return(
        <>
        <h2>Todo list</h2>

        <input type="text"  value={input} onChange={handleChange}  />
        <button onClick={handleClick}  >Add List ListItems</button>


       {
        list.length>0 ? list.map((element,index)=><ListItems list={element} index={index} handleRemove={handleRemove} />) : <h3>Todo empty</h3>
       }




        
        </>
    )
}

export default TodoList





const ListItems = ({list,index,handleRemove}) =>{

    return(
        <>
    
        <li>{list}</li>
        <button onClick={()=>handleRemove(index)}  >Removc</button>

        </>
    )
}


















// 1. input , add button 
// 2. add the item click on add button , new list item should be added
