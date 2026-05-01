import { useState } from "react";
import "./PetsCadastrados.css";

function PetsCadastrados() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const pets = [
    { id: 1, nome: "Rex", tipo: "Cachorro", adotado: false, foto: "/img/rex.jpg" },
    { id: 2, nome: "Mia", tipo: "Gato", adotado: true, foto: "/img/mia.jpg" },
    { id: 3, nome: "Luna", tipo: "Cachorro", adotado: false, foto: "/img/luna.jpg" },
    { id: 4, nome: "Simba", tipo: "Gato", adotado: true, foto: "/img/simba.webp" },
    { id: 5, nome: "Charlie", tipo: "Cachorro", adotado: false, foto: "/img/chalie.jpg" },
    { id: 6, nome: "Bella", tipo: "Gato", adotado: true, foto: "/img/bella.jpg" },
    { id: 7, nome: "Max", tipo: "Cachorro", adotado: false, foto: "/img/max.webp" },
  ];

  const petsFiltrados = pets.filter((pet) => {
    const nomeCombina = pet.nome.toLowerCase().includes(busca.toLowerCase());
    const tipoCombina = filtro === "todos" || pet.tipo === filtro;
    return nomeCombina && tipoCombina;
  });

  return (
    <div className="container_pets">
      <h2>Pets Cadastrados</h2>
      <p>Visualize e gerencie todos os pets e suas solicitações de adoção</p>

      <input
        type="text"
        placeholder="Buscar pets..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div>
        <button onClick={() => setFiltro("todos")}>Todos</button>
        <button onClick={() => setFiltro("Cachorro")}>Cachorros</button>
        <button onClick={() => setFiltro("Gato")}>Gatos</button>
      </div>

      <div className="container_lista">
        {petsFiltrados.map((pet) => (
          <div className="card_pet" key={pet.id}>
            <div className="card_info">
              <img src={pet.foto} alt={pet.nome} className="avatar" />

              <div>
                <h3>{pet.nome}</h3>
                <p>
                  {pet.tipo} • {pet.adotado ? "Adotado" : "Disponível"}
                </p>
              </div>
            </div>

            <div className="card_actions">
              <span className="badge">
                {pet.adotado ? "Adotado" : "Disponível"}
              </span>
              <span className="seta">▼</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsCadastrados;