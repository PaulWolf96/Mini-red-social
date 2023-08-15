import { useState } from "react";


const FormPost = ( { publicarPost } ) => {

  const [click, setClick] = useState(false);
  const [dataPost, setDataPost] = useState({
    titulo: "",
    imgUrl: ""
  });

  
  const newPost = (e) => {
    e.preventDefault();
    publicarPost(dataPost);
  }

  return (

    <>
      <button onClick={() => setClick(true)}>Nueva Publicación</button>
      {
        click && 
          <form action="">
            <input type="text" placeholder="Titulo de la Foto" onChange={(e) => setDataPost({...dataPost, titulo: e.target.value})} />
            <input type="text" placeholder="URL de la Foto" onChange={(e) => setDataPost({...dataPost, imgUrl: e.target.value})} />
            <button onClick={newPost}>Publicar</button>
          </form> 
      }
    </> 
  );  
}

export default FormPost;
