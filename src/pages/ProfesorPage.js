import AddQuestion from './AddQuestion';
import '../App.css';



export function ProfesorPage() {
  return (
    <div className='Wrapper'>
      <div className="App">
        <h1>Our mision:</h1>
        <form>
          <label >
            <input className='inputMision' type='text' size="100" maxlength="100" />
          </label>
        </form>


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
              <input type='radio' name="foo" />female
            </label>
          </li>
          <li>
            <label >
              <input type='radio' name="foo" />male
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
        <AddQuestion />

      </div>

    </div>
  )
}