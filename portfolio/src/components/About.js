import AboutCSS from './About.css';

function About(){
    return(
        <div className="About">
            <div className="About__LeftBar">
            <p>About Me</p>
            <p>Ik ben Harm Haandrikman, een software developer met 4 jaar ervaring.
               Ik ben 19 jaar oud met een passie voor back-end development
               Ik heb mee gedaan aan meerdere projecten en ga binnenkort beginnen aan een nieuw project.
               Het heet bespaar groen en daar ga ik bezig voor het verduurzamen van nederland
            </p>
            <br/>
            <p>
                Ik heb zelf veel ervaring met C#, React.js, Unity, html, en css.
                Dat kun je ook zien aan de projecten die ik op het portfolio heb gelist
            </p>
            </div>
            <div className="About__RightBar">
            <p>Activities</p>
            </div>
        </div>
    )
}

export default About;