import './App.css';
import nad_bg from './resources/nadsistemas.png';
import {AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh} from 'react-icons/ai'

function FeedForm() {
    return (
            <div className='feed'>
                <div className='feedForm'>
                    <img src={nad_bg}/>
                    <input type="text" placeholder='No que voce esta pessando ?'/>
                </div>
  
                <div className='feedIcon'>
                     <div className='IconSingle'>
                          <AiFillVideoCamera/>
                        <span>Video ao vivo</span>
                     </div>
  
                      <div className='IconSingle img'>
                          <AiOutlineFileImage/>
                        <span>Video ao vivo</span>
                     </div>
  
                      <div className='IconSingle emoji'>
                          <AiOutlineMeh/>
                        <span>Video ao vivo</span>
                     </div>
                </div>
               
            </div>
            

);
}

export default FeedForm;
