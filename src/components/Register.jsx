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
      password: user.password
    }
    if(newUser.id && newUser.username && newUser.password) {
      let userFind = listUser.find((user) => user.username === newUser.username);
      if(userFind) {
        alert('El nombre de usuario ya existe');
      } else {
        setListUser([...listUser, newUser]);
        alert('Usuario Registrado');
        setTimeout(() => {
          navigate('/');
        }, 100);
      }
    } else {
      alert('Falta rellenar algún campo');
    }
  }


  return (
    <div>
      <h1>Registrarse</h1>
      <form action="">
        <input type="text" placeholder="Ingrese un nombre de usuario" value={user.username} name="username" onChange={handleInputChange}/>
        <input type="password" placeholder="Ingrese una contraseña" value={user.password} name="password" onChange={handleInputChange} />
        <button onClick={registerUser}>Registrarse</button>
      </form>
    </div>
  );
}

export default Register