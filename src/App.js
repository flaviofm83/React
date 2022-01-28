import './App.css';
import { Component } from 'react';


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
              <div className='post'>
                 <img src={post.cover} alt={post.title} />
                  <div key={post.id} className="post-content">
                        <h1> {post.title} </h1> 
                        <p> {post.body} </p>
                  </div>
               </div>
           ))}
        </div>
      </section>
        
       )
 }
}



export default App;
