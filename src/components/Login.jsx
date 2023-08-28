import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const loginUser = (e) => {
    e.preventDefault();
    let usersData = JSON.parse(localStorage.getItem("Usuarios"));
    let userFind = usersData.find((us) => (us.username === user.username) && (us.password === user.password));
    if(userFind) {
      localStorage.setItem("Sesion Usuario", JSON.stringify(userFind));
      navigate('/posts');
    } else {
      alert('Usuario o contraseña incorrectos');
      setUser({username: '', password: ''});
    }
  }

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <form action="">
        <input type="text" placeholder="Ingrese un nombre de usuario" name="username" value={user.username} onChange={handleInputChange} />
        <input type="password" placeholder="Ingrese una contraseña" name="password" value={user.password} onChange={handleInputChange} />
        <button onClick={loginUser}>Iniciar Sesion</button>
      </form>
      <p>Aún no tienes una cuenta? <a href="/register">Registrate aquí</a></p>
    </div>
  );
}

export default Login;