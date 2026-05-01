import { FaPaw } from "react-icons/fa";
import { useState } from "react";
import Menu from "./componentes/Menu";
import PetsCadastrados from "./pages/PetsCadastrados";

import "./App.css";

function App() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin(evento) {
    evento.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        window.location.href = "/pets";
      } else {
        alert(dados.mensage || "Login inválido");
      }
    } catch (error) {
      alert(" Erro ao conectar com a API");
      console.log(error);
    }
  }

  return (
    <>
      <Menu />
      <PetsCadastrados />

      
      <div className="container_inicial">
        <div className="container_titulo">
          <h1>
            <FaPaw /> {""} Pet new Life
          </h1>
          <p>Painel administrativo</p>
        </div>

        <form onSubmit={fazerLogin}>
          <div className="container_imput">
            <label>CPF</label>
            <input
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="container_imput">
            <label>Senha</label>
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button className="botao_logar" type="submit">
            Entrar
          </button>
        </form>

        <p className="paragrafo_login">
          Faça login com suas credenciais de funcionário
        </p>
      </div>
      
    </>
  );
}

export default App;
