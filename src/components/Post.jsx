import { useState } from "react";

const Post = ({ id, username, titulo, imgUrl, date}) => {

  const [comment, setComment] = useState('');

  const [listComment, setListComment] = useState([]);

  //Traigo el usuario logueado (para imprimir su nombre cuando haga un comentario)
  const userLogin = JSON.parse(localStorage.getItem("Sesion Usuario"));

  const newComment = (e) => {
    e.preventDefault();
    const newComment = { username: userLogin.username, commentText: comment };
    //Obtengo el arreglo del localStorage donde están los posteos.
    let posts = JSON.parse(localStorage.getItem("Posts"));
    const addComment = posts.map(post => {
      if(post.id === id) {
        post.comment.push(newComment);
      }
      return post; 
    });
    localStorage.setItem("Posts", JSON.stringify(addComment)); 
    setListComment([...listComment, newComment]);
  }

  return (
    <div className="div-post">
      <h4>{username}</h4>
      <h2>{titulo}</h2>
      <img src={imgUrl} alt="" width="600px" />
      <p>{date}</p>
      <textarea
        name="comment"
        id=""
        placeholder="Agrega un comentario..."
        cols="50" rows="3"
        value={comment.commentText}
        onChange={(e) => setComment(e.target.value)}>
      </textarea>
      <button onClick={newComment}>Comentar</button>
      <div className="div-allComments">
        {
          listComment.map(comm => 
            <div> 
              <h4>{comm.username}</h4>
              <p>{comm.commentText}</p>
            </div>
          
          )
        }
      </div>
    </div>
  );
}

export default Post;