import AboutCSS from './About.css';
import ActVariables from './Activities';
import Activities from './Activities';
import ActivityVar from './ActivityVar';

function About(){
    return(
        <div className="About">
            <div className="About__LeftBar">
            <p>About Me</p>
            <p>Ik ben Ado De Vries, ben een sortware developer met 8 jaar ervaring. ik ben 27 jaar oud met een passie voor back-end development.
                ik heb mee gedaan aan verschillende projecten, en begin binnenkort aan een nieuw project. om de projecten te zien ga dan naar de Skills tab.
                daar zie je ook welke projecten ik op het moment mee bezig ben en welke ik heb gedaan. <br/><br/>
                
                Ik heb 5 jaar ervaring met C#, unity, JS en 3 jaar met html, css, react.js. hierdoor kan ik verschillende projecten opstarten zonder moeite.
                Dat blijkt aan de hoeveelheid aan projecten die ik heb gemaakt. bijvoorbeeld een youtube video downloader. <br/>
                zoekt een persoon die een simpele en snelle applicatie kan maken dan bent u bij de juiste persoon.
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