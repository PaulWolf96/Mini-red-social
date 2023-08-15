import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = () => {

  }

  const handleInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <form action="">
        <input type="text" placeholder="Ingrese un nombre de usuario" name="username" onChange={handleInput} />
        <input type="password" placeholder="Ingrese una contraseña" name="password" onChange={handleInput} />
        <button>Iniciar Sesion</button>
      </form>
      <p>Aún no tienes una cuenta? <a href="/register">Registrate aquí</a></p>
    </div>
  );
}

export default Login;