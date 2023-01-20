import HeaderCSS from './Header.css'
import Buttons from './Buttons';
import Ado from './img/Ado.jpg'

function Header(){
    return(
        <div>
        <div className='Header'>
            <div className='Header__Info'>
                <p>Ado de Vries</p>
                <span className='Header__Title'>Software Developer</span>
            </div>
            <div>
                <img className='Img' src={Ado}></img>
            </div>
        </div>
        <Buttons/>
        </div>

    )
}
export default Header;