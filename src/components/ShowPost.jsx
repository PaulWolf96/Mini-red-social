import { useState, useEffect } from "react";
import FormPost from "./FormPost";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

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
    setListPosts([...listPosts, post]);
  }


  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("Sesion Usuario");
    navigate('/');
  }


  return (
    <div className='container-post'>
      <button onClick={logOut}>Cerrar Sesion</button>
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
            comment={post.comment}
          />
        )
      }
    </div>
  );
}


export default ShowPost;
