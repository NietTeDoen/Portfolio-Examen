import MediaPlayer from "./img/MediaPlayer.png";
import ActivitiesCSS from "./Activities.css";

function Activities(props) {
  console.log(props.title);
  return (
    <div className="Project">
      <p className="Project__Title">{props.title}</p>
      <img className="Project__Img" src={props.img} />
      <p className="Project__Desc">{props.desc}</p>
    </div>
  );
}

function ActVariables() {
  return (
    <div>
      <Activities
        title="StretchMusicPlayer"
        img={MediaPlayer}
        desc="Dit is een muziek speler en video downloader in 1 project. hierdoor kun je de potentie krijgen om snel een video te downloaden
            en daardoor snel een playlist te maken naar jou wil. en nog beter het is Gratis en AD FREE"
      />
      <Activities 
      title="VR Kermis" 
      img={MediaPlayer} 
      desc="In deze game gaat het om blikken werpen. hiermee kun je VR onder de knie krijgen en leuke magazines verdienen in de game.
            bedreid je zelf maar voor voor het echte VR met deze game." 
      />
    </div>
  );
}

export default ActVariables;
