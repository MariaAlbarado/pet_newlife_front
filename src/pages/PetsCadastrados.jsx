import { useState } from "react";

function PetsCadastrados() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const pets = [
    {
      id: 1,
      nome: "Rex",
      tipo: "Cachorro",
      adotado: false,
    },
    {
      id: 2,
      nome: "Mia",
      tipo: "Gato",
      adotado: true,
    },
    {
      id: 3,
      nome: "Luna",
      tipo: "Cachorro",
      adotado: false,
    },
    {
      id: 4,
      nome: "Simba",
      tipo: "Gato",
      adotado: true,
    },
    {
      id: 5,
      nome: "Charlie",
      tipo: "Cachorro",
      adotado: false,
    },
    {
      id: 6,
      nome: "Bella",
      tipo: "Gato",
      adotado: true,
    },
    {
      id: 7,
      nome: "Max",
      tipo: "Cachorro",
      adotado: false,
    },
  ];

  const petsFiltrados = pets.filter((pet) => {
    const nomeCombina = pet.nome.toLowerCase().includes(busca.toLowerCase());
    const tipoCombina = filtro === "todos" || pet.tipo === filtro;
    return nomeCombina && tipoCombina;
  });

  return (
    <div>
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

      {petsFiltrados.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.nome}</h3>
          <p>
            {pet.nome} - {pet.tipo} - {pet.adotado ? "Adotado" : "Disponível"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PetsCadastrados;
