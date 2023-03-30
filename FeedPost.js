import './App.css';
import nad_bg from './resources/nadsistemas.png';


function FeedPost(props) {
  return (
          <div className='feedPost'>
          <div className='feedPostSingle'>
              
               <div className='feedPerfil'>
                  <img src={nad_bg}/>
                  <h3> {props.nome}<br/><span>{props.horario} </span></h3>
               </div>

               <div className='feedContent'>
                  <p>{props.conteudo}<br/>
                     
                  </p>
                  <img src={props.img}/>
               </div>
          </div>
      </div>

);
}

export default FeedPost;
