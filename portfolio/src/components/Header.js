import HeaderCSS from './Header.css'
import Buttons from './Buttons';
import Harm from './img/Harm.png';

function Header(){
    return(
        <div>
        <div className='Header'>
            <div className='Header__Info'>
                <p>Harm Haandrikman</p>
                <span className='Header__Title'>Software Developer</span>
            </div>
            <div>
                <img className='Img' src={Harm}></img>
            </div>
        </div>
        <Buttons/>
        </div>

    )
}
export default Header;