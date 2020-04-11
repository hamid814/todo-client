import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  const [isAuthenicated, setIsAuthenicated] = useState(false)
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      getTodos();
    }
    
    // eslint-disable-next-line
  }, [])
  
  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos', {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })

      setIsAuthenicated(true)

      setTodos(res.data.data)
    } catch (err) {
      console.log(err.response)
    }
  }
  
  if(isAuthenicated) {
    return (
      <>
        {
          todos.map(todo => (
            <>
              {
                todo.text
              }
              <br />
            </>
          ))
        }
      </>
    )
  } else {
    return (
      <>
        please login or register
      </>
    )
  }
}

export default Home
