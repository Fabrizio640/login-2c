import React, { useState } from "react";
import "./App.css";
import Cadastro from "./Cadastro";

function App() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  if (mostrarCadastro) {
    return <Cadastro voltar={() => setMostrarCadastro(false)} />;
  }

  return (
    <div className="form-container">
      <h1>LOGIN</h1>

      <label>USUÁRIO:</label>
      <input type="text" placeholder="Digite seu usuário" />

      <label>SENHA:</label>
      <input type="password" placeholder="Digite sua senha" />

      <div className="opcoes">
        <label>
          <input type="checkbox" /> Manter conectado
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>

      <button className="btn">ENTRAR</button>

      <p className="login-com">LOGAR COM</p>
      <div className="social-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
        <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Apple" />
      </div>

      <p className="footer-text">
        NÃO TEM CONTA? <a href="#" onClick={() => setMostrarCadastro(true)}>Inscrever-se</a>
      </p>
    </div>
  );
}

export default App;
