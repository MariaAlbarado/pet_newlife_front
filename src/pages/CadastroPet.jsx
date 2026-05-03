import { useState } from "react";
import "./CadastroPet.css";

function CadastroPet() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [porte, setPorte] = useState("");
  const [cor, setCor] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  async function cadastrarPet(e) {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          tipo,
          raca,
          idade,
          sexo,
          porte,
          cor,
          imagem,
          descricao,
        }),
      });

      if (resposta.ok) {
        alert("Pet cadastrado com sucesso!");

        setNome("");
        setTipo("");
        setRaca("");
        setIdade("");
        setSexo("");
        setPorte("");
        setCor("");
        setImagem("");
        setDescricao("");
      } else {
        const erro = await resposta.json();
        alert(erro.message || "Erro ao cadastrar pet");
      }
    } catch (error) {
      console.log(error);
      alert("Erro na conexão com a API");
    }
  }

  return (
    <div className="container_cadastro">
      <h2>Cadastro de Pet</h2>

      <form onSubmit={cadastrarPet} className="form_grid">
        <div className="imagem_pet">
          <div className="circulo">Sem imagem</div>
        </div>

        <div className="campo">
          <label>Nome do Pet *</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="campo">
          <label>Tipo *</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>

        <div className="campo">
          <label>Raça *</label>
          <input value={raca} onChange={(e) => setRaca(e.target.value)} />
        </div>

        <div className="campo">
          <label>Idade *</label>
          <input value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div className="campo">
          <label>Sexo *</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>

        <div className="campo">
          <label>Porte *</label>
          <select value={porte} onChange={(e) => setPorte(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        <div className="campo">
          <label>Cor *</label>
          <input value={cor} onChange={(e) => setCor(e.target.value)} />
        </div>

        <div className="campo">
          <label>URL da imagem *</label>
          <input value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>

        <div className="campo full">
          <label>Descrição *</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <button type="submit" className="btn_salvar">
          Salvar Pet
        </button>
      </form>
    </div>
  );
}

export default CadastroPet;