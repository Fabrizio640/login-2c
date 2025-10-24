import React from "react";
import "./App.css";

function Cadastro({ voltar }) {
  return (
    <div className="form-container">
      <h1>CADASTRO</h1>

      <label>NOME:</label>
      <input type="text" placeholder="Digite seu nome" />

      <label>E-MAIL:</label>
      <input type="email" placeholder="Digite seu e-mail" />

      <label>CPF:</label>
      <input type="text" placeholder="Digite seu CPF" />

      <div className="linha-usuario">
        <div>
          <label>USUÁRIO:</label>
          <input type="text" placeholder="Usuário" />
        </div>
        <div>
          <label>SENHA:</label>
          <input type="password" placeholder="Senha" />
        </div>
      </div>

      <button className="btn">CADASTRAR</button>

      <p className="login-com">LOGAR COM</p>
      <div className="social-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
        <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Apple" />
      </div>

      <p className="footer-text">
        JÁ TEM CONTA? <a href="#" onClick={voltar}>Logar</a>
      </p>
    </div>
  );
}

export default Cadastro;
