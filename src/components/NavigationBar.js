import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav className='allNav'>

            <h1 className='title'>Hello, welcome to FORMS!</h1>
            <ul className='navList'>
                <li className='list'>
                    <Link to="/"> Home</Link>
                </li>
                <li className='list'>
                    <Link to="/profesor"> Profesor Page</Link>
                </li>
                <li className='list'>
                    <Link to="/student"> Student Page</Link>
                </li>

            </ul>

        </nav>
    )

}