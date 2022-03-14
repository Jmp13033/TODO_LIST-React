import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [todos, setTodos] = useState([]) // this is the list of the to do values in an array 
  const [todo, setTodo] = useState("") // takes data from the user 


  useEffect(() => {
    const form = window.localStorage.getItem("keepstate") // local storage to get the item in the list 
    setTodos(JSON.parse(form));


  }, [])
  useEffect(() => {
    window.localStorage.setItem("keepstate", JSON.stringify(todos)) // this is a function  in order to setItem("keystate", Json.stringy(easytoreadthefilre))

  },[todos])


  const handleSubmit = e => { // handle the submit form for the data
    e.preventDefault() // set the prevent default value to the button  

    const newtodo = // set up a new instance of that new todo in an object 
    {

      text: todo, // gets all the items 
      completed: false  // add the new input from your user.. 
    

    }
    setTodos([...todos].concat(newtodo)) // add the new to do to the array object 
    setTodo("") // reset the todo... 

  }
  function deleteTodo(id) {
    const updatedtodos = todos.filter((items, i) => i !== id ) // need to filter out all the items in the array // filter carbon copy array // items placeholdrer we are after (i) for index 
    

    setTodos(updatedtodos)  // updated todos



  }
  function Completed() 
  {
    var updatedtodos = todos.map((todo,index) => { // take the index and map it out aka the values has the key and indexx in the todo lidst array 

      if( todo.index === todo.id)  // the todo id is the id of the array 
      {
        todo.completed = true

      }
      return todo
    })
    setTodos(updatedtodos);


  }





  return (
    <div className="App">
    <form onSubmit={handleSubmit}> 
    <input
    type = "text"
    onChange={(e) => setTodo(e.target.value) }
    value = {todo}

    />
    <button>Add to do </button>
    </form>
    {
      todos.map((todo,id) =>  
      <div key={todo.id}> {todo.text}
        <button onClick={(e) => deleteTodo(id)}>deleteTodo</button>
        <input type="checkbox" checked={todo.completed} onChange ={() => Completed()}/>
        </div>
    )} 
    </div>
    
  );
}

export default App;



