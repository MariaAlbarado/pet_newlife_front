import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import "./Login.css";

function Login() {
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
        alert("Login realizado com sucesso!");
      } else {
        alert(dados.message || "Login inválido");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao conectar com a API");
    }
  }

  return (
    <div className="container_inicial">
      <div className="container_titulo">
        <h1>
          <FaPaw /> Pet new Life
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
            onChange={(evento) => setCpf(evento.target.value)}
          />
        </div>

        <div className="container_imput">
          <label>Senha</label>
          <input
            type="password"
            placeholder="********"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
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
  );
}

export default Login;