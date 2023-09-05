import { useState, useEffect } from "react";
import FormPost from "./FormPost";
import Post from "./Post";


const ShowPost = () => {

  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    let dataPosts = localStorage.getItem("Posts");
    if (dataPosts) {
      setListPosts(JSON.parse(dataPosts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(listPosts))
  }, [listPosts])


  const publicarPost = (post) => {
    if(post.titulo && post.imgUrl) {
      setListPosts([...listPosts, post]);
    } else {
      alert('Rellene ambos campos');
    }
  }

  return (
    <div className='container container-post w-50'>
      <br />
      <br />
      <FormPost
        publicarPost={publicarPost}
      />
      { 
        listPosts.map(post =>
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            titulo={post.titulo}
            imgUrl={post.imgUrl}
            date={post.date}
            comments={post.comment}
          />
        )
      }
    </div>
  );
}


export default ShowPost;
