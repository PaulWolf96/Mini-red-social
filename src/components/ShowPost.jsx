import { useState, useEffect } from "react";
import FormPost from "./FormPost";

const ShowPost = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let dataPosts = localStorage.getItem("Posts");
    if(dataPosts) {
      setPosts(JSON.parse(dataPosts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(posts))
  }, [posts])


    const publicarPost = (post) => {
      setPosts([...posts, post])
    }


      return (
        <div className='container-post'>
          <FormPost 
            publicarPost={publicarPost}
          />
          {
            posts.map(post => 
              <div>
                <h3>{post.titulo}</h3>
                <img src={post.imgUrl} alt="" />
              </div>
            )
          }
        </div>
      );
  } 


export default ShowPost;
