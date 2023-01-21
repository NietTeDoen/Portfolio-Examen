import ButtonsCSS from './Buttons.css'
import { Route, Link } from 'react-router-dom';
import App from '../App';
import Skills from '../Skills';
import Contact from '../Contact';

function Buttons(){
    return(
        <div className='Gridbox'>
            <button type='button'>
                <Link to={"/"}>About</Link>
            </button>
            <button>
            <Link to={"/Skills"}>   Skills </Link> 
            </button>
            
            <button>
            <Link to={"/Contact"}> Contact me </Link>
            </button>
            
        </div>
    )
}
export default Buttons;