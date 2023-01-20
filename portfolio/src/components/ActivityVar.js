import img1 from './img/MediaPlayer.png';
import Activities from './Activities';

function ActivityVar(){
    const items =[
        {
            id: '1a',
            title: 'StretchMusic Player',
            desc: 'This is a music player',
            img: img1,
        }
    ]
    return(
        <div className='Activities'>
            <Activities Items={items}/>
        </div>
    )
}

export default ActivityVar;