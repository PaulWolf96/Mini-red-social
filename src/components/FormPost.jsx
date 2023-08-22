import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FormPost = ( { publicarPost } ) => {

  const [click, setClick] = useState(false);

  const [post, setPost] = useState({
    titulo: "",
    imgUrl: ""
  });

  const handleInputChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value });
  }
  
  //Traigo el usuario logueado
  const userLogin = JSON.parse(localStorage.getItem("Sesion Usuario"));

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    //El metodo padStart es para rellenar un string. 
    //El primer argumento es la longitud deseada y el otro es el caracter para rellenarlo.
    //En este caso lo uso para que los minutos siempre se vean con dos dígitos.
    let dateFormat = date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0'); 
    const newPost = {
      id: uuidv4(),
      username: userLogin.username,
      titulo: post.titulo,
      imgUrl: post.imgUrl,
      date: dateFormat,
      comment: [] 
    }
    publicarPost(newPost);
  }

  return (

    <>
      <button onClick={() => setClick(true)}>Nueva Publicación</button>
      {
        click && 
          <form action="">
            <input type="text" placeholder="Titulo de la Foto" name="titulo" onChange={handleInputChange} />
            <input type="text" placeholder="URL de la Foto" name="imgUrl" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Publicar</button>
          </form> 
      }
    </> 
  );  
}

export default FormPost;
