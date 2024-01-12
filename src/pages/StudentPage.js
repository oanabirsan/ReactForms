import React from 'react'
import AddQuestion from './AddQuestion'

export  function StudentPage() {
    return (
        <div className='Wrapper'>
           <div className="suppose"><h1>Hi, Student! Please resolve this! </h1></div>
    <div className="App">
        <h1>Our mision:</h1>
       


        <h1>General information:</h1>
        <h3>1.Age:</h3>
        <label >
          <input type='text' />
        </label>
        <h3>2.E-mail adress:</h3>
        <label >
          <input type='text' />
        </label>
        <h3>3.Gender:</h3>
        <ul className='listStyle'>
          <li>
            <label >
              <input type='radio' />female
            </label>
          </li>
          <li>
            <label >
              <input type='radio' />male
            </label>
          </li>
        </ul>

        <h3>4.Monthly income:</h3>
        <ul className='listStyle'>
          <li>
            <label >
              <input type='checkbox' />  less then 2000 ron
            </label>
          </li>
          <li>
            <label >
              <input type='checkbox' /> 2000 ron - 3000 ron
            </label>
          </li>
          <li>
            <label >
              <input type='checkbox' /> 3000 ron - 5000 ron
            </label>
          </li>
          <li>
            <label >
              <input type='checkbox' /> more then 5000 ron
            </label>
          </li>
        </ul>

        <h1>About our question:</h1>
        

      </div>
    
    </div>
    )
}