import { useState } from "react";

const Post = ({ id, username, titulo, imgUrl, date, comments }) => {

  const [comment, setComment] = useState('');

  const [listComment, setListComment] = useState([]);


  //Traigo el usuario logueado (para imprimir su nombre cuando haga un comentario)
  const userLogin = JSON.parse(localStorage.getItem("Sesion Usuario"));

  const newComment = () => {
    //Cada post tiene un arreglo que se llama comments, ahí guardo todos los comentarios de ese post en particular
    const newComment = { username: userLogin.username, commentText: comment };
    //Obtengo el arreglo del localStorage donde están los posteos.
    let posts = JSON.parse(localStorage.getItem("Posts"));
    //Recorro cada post y al que coincida el id le agrego un comentario en el arreglo comments.
    //La variable "addComment" retorna el mismo post pero con el comentario agregado.
    const addComment = posts.map(post => {
      if (post.id === id) {
        post.comment.push(newComment);
      }
      return post;
    });
    localStorage.setItem("Posts", JSON.stringify(addComment));
    setListComment([...listComment, newComment]);
    window.location.reload();
  }


  return (
    <div className="container div-post">
      <br />
      <div class="card p-2">
        <div class="card-body">
          <p className="fst-italic">{username}</p>
          <h5 class="card-title">{titulo}</h5>
        </div>
        <img src={imgUrl} width="400px" class="card-img-top" alt="..." />
        <br />
        <p className="fw-light">{date}</p>
        <textarea
          name="comment"
          id=""
          className="form-control"
          placeholder="Agrega un comentario..."
          cols="50" rows="2"
          value={comment.commentText}
          onChange={(e) => setComment(e.target.value)}>
        </textarea>
        <br />
        <button className="btn btn-primary" onClick={newComment}>Comentar</button>
        <div className="container div-allComments">
          {
            comments.map(comm =>
              <div>
                <hr />
                <h6>{comm.username}</h6>
                <p>{comm.commentText}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Post;