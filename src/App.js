import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';


class App extends Component {

state = {
   posts:[]
}


componentDidMount(){ 
  this.loadPosts();
}


loadPosts = async ()=>{
   const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
   const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

   const [posts, photos] = await Promise.all([postResponse, photoResponse]);

   const postsJason = await posts.json();
   const photosJason = await photos.json();

   const postsAndPhotos = postsJason.map((post, index)=>{
      return { ...post, cover: photosJason[index].url}
   });

   this.setState({posts:postsAndPhotos}); 
}


 render(){
    const {posts}= this.state; 
  return (
      <section className = "container">
         <div className="posts">
           {posts.map (post=> (
              <PostCard 
               key={post.id}
               title={post.title}
               body={post.body}
               id={post.id}
               cover={post.cover}
              /> //Nesse momento o vsCode já coloca o import pra gente
           ))}
        </div>
      </section>
        
       )
 }
}



export default App;
