import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";


const Register = () => {


  const navigate = useNavigate();

  const [user, setUser ] = useState({
    username: '',
    password: ''
  });

  const [listUser, setListUser] = useState([]);
  

  useEffect(() => {
    let users = localStorage.getItem("Usuarios");
    if(users) {
      setListUser(JSON.parse(users));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Usuarios", JSON.stringify(listUser));
  }, [listUser])


  
  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  

  const registerUser = (e) => {
    e.preventDefault();
    setUser({username: '', password: ''});
    const newUser = {
      id: uuidv4(),
      username: user.username,
      password: user.password,
      posts: []
    }
    //Me aseguro de que ningún campo esté vacio
    if(newUser.id && newUser.username && newUser.password) {
      //Me aseguro de que el nombre de usuario ingresado no exista ya en la lista de usuarios
      let userFind = listUser.find((user) => user.username === newUser.username);
      if(userFind) {
        alert('El nombre de usuario ya existe');
      } else {
        setListUser([...listUser, newUser]);
        alert('Usuario Registrado');
        //Redirecciono a la pagina de Login
        setTimeout(() => {
          navigate('/');
        }, 100);
      }
    } else {
      alert('Falta rellenar algún campo');
    }
  }


  return (
    <div className="container col-6 py-4">
      <h1>Registrarse</h1>
      <form>
        <label for="inputUser" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="inputUser" placeholder="Ingrese un nombre de usuario" value={user.username} name="username" onChange={handleInputChange}/>
        <br />
        <label for="inputPassword" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Ingrese una contraseña" value={user.password} name="password" onChange={handleInputChange} />
        <br />
        <button className="btn btn-primary" onClick={registerUser}>Registrarse</button>
      </form>
      <br />
      <p>Si ya tienes una cuenta <a href="/">Inicia Sesion aquí</a></p>
    </div>
  );
}

export default Register