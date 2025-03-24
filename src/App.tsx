import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Bem-vindo de Volta</h1>
          <p>Por favor, faça login para continuar</p>
        </div>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Digite sua senha"
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar-me</label>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>
          
          <button type="submit" className="login-button">Entrar</button>
        </form>
        
        <div className="login-footer">
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
