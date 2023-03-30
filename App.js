import {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedPost from './FeedPost';
import FeedForm from './FeedForm';
import {db} from './firebase.js';



function App() {

  const [posts,setPosts] = useState([])

  useEffect(()=>{ 
       db.collection('posts').onSnapshot(snapshot=>{
           setPosts(snapshot.docs.map(function(doc){
                return {info:doc.data()}
           }));
       })
  },[])

  return (
    <div className="App">
        <Header/>
        <Stories/>
        <FeedForm/>
         { 
          posts.map(function(val){
            return(
            <FeedPost nome={val.info.nome} conteudo={val.info.conteudo} img={val.info.img}  />
            )
          })
  
      }

    </div>
  );
}

export default App;
