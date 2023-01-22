import HeaderCSS from './Header.css'
import Buttons from './Buttons';
import Harm from './img/Harm.png';

function Header(){
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className='Header'>
            <div className='Header__Info'>
                <p>NietTeDoen</p>
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