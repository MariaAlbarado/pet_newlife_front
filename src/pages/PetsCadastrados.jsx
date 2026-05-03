import "./PetsCadastrados.css";
import { useState, useEffect } from "react";

function PetsCadastrados() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [petAberto, setPetAberto] = useState(null);
  const [petsApi, setPetsApi] = useState([]);

  useEffect(() => {
    async function buscarPets() {
      try {
        const resposta = await fetch("http://localhost:3000/api/admin/pets");
        const dados = await resposta.json();

        setPetsApi(dados.pets);
      } catch (error) {
        console.log("Erro ao buscar pets:", error);
      }
    }

    buscarPets();
  }, []);

  const pets = [
    {
      id: 1,
      nome: "Rex",
      tipo: "Cachorro",
      adotado: false,
      foto: "/img/rex.jpg",
    },
    { id: 2, nome: "Mia", tipo: "Gato", adotado: true, foto: "/img/mia.jpg" },
    {
      id: 3,
      nome: "Luna",
      tipo: "Cachorro",
      adotado: false,
      foto: "/img/luna.jpg",
    },
    {
      id: 4,
      nome: "Simba",
      tipo: "Gato",
      adotado: true,
      foto: "/img/simba.webp",
    },
    {
      id: 5,
      nome: "Charlie",
      tipo: "Cachorro",
      adotado: false,
      foto: "/img/chalie.jpg",
    },
    {
      id: 6,
      nome: "Bella",
      tipo: "Gato",
      adotado: true,
      foto: "/img/bella.jpg",
    },
    {
      id: 7,
      nome: "Max",
      tipo: "Cachorro",
      adotado: false,
      foto: "/img/max.webp",
    },
  ];

  const petsFiltrados = petsApi.filter((pet) => {
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
          <div key={pet.id}>
            <div
              className="card_pet"
              onClick={() => setPetAberto(petAberto === pet.id ? null : pet.id)}
            >
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

            {petAberto === pet.id && (
              <div className="detalhes_pet">
                <p>{pet.nome} é um pet muito carinhoso e brincalhão.</p>

                <h4>📋 Solicitações de Adoção</h4>

                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Moradia</th>
                      <th>Pessoas</th>
                      <th>Data</th>
                      <th>Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Luma Andrade</td>
                      <td>(85) 98567-7689</td>
                      <td>Casa</td>
                      <td>4</td>
                      <td>01/05/2026</td>
                      <td>
                        <button className="whatsapp">Falar no WhatsApp</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsCadastrados;
