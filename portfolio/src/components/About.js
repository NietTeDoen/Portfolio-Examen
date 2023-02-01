import AboutCSS from './About.css';
import ActVariables from './Activities';
import Activities from './Activities';

function About(){
    return(
        <div className="About">
            <div className="About__LeftBar">
            <p>About Me</p>
            <p>Hallo ik ben Harm Haandrikman<br/>
            ik ben een software developer met ervaring in HTML code, CSS code, en heb veel javascript developer skills.
            Hierdoor heb ik ervaring met het React.js Framework. Daarnaast ben ik ook een Junior C# Developer, hierdoor kan ik omgaan met Unity en Visual Basic.
            Ik kan coderen in veel Text editiors bijv. Sublime, Visual studio code, Brackets en Rider IDE.
            ik ben een junior Front-End Developer en ben een experienced unity game developer met 5 jaar ervaring.
            <br/>
            Voor mijn projecten ga naar mijn <a href='https://github.com/NietTeDoenDlive'>Github</a>
            <br/><br/>
            Over mij? <br/>
            Ik ben 19 jaar oud en heb een passie voor Back-End development. Daarentegen kan ik ook Front-End development.
            Ik vond dat een MUST om te leren zodat ik zo goed moegelijk kan samen werken met de andere kant van het team en mijn projecten daarop aan kan passen.
            Daarnaast heb ik veel ervaring met unity indie development en heb daardoor ook goede problem solving capabilities.
            In een bedrijf heb ik nog geen ervaring met in een team werken maar ik ben zwaar gemotiveerd om het te leren.<br/>
            <br/>Gaat u mij daarbij helpen?
            </p>
            </div>
            <div className="About__RightBar">
            <p>Recent Activities</p>
            <ActVariables/>
            </div>
        </div>
    )
}

export default About;