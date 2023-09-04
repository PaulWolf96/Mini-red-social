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
    //Traigo los usuarios del LocalStorage
    let usersData = JSON.parse(localStorage.getItem("Usuarios"));
    //Busco si el usuario existe
    let userFind = usersData.find((us) => (us.username === user.username) && (us.password === user.password));
    if(userFind) {
      //Creo una "Sesion" de usuario en el LocalStorage y redirecciono a la página de los Posts
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
    <div className="container col-6 py-4">
      <h1>Iniciar Sesion</h1>
      <form>
        <label for="inputUser" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="inputUser" placeholder="Ingrese un nombre de usuario" name="username" value={user.username} onChange={handleInputChange} />
        <br />
        <label for="inputPassword" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Ingrese una contraseña" name="password" value={user.password} onChange={handleInputChange} />
        <br />
        <button className="btn btn-primary" onClick={loginUser}>Iniciar Sesion</button>
      </form>
      <br />
      <p>¿Aún no tienes una cuenta? <a href="/register">Registrate aquí</a></p>
    </div>
  );
}

export default Login;