import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1>Pet New Life</h1>

      <p>
        Esse site é para ajudar animais a encontrarem um lar cheio de amor e cuidado.
      </p>

      <nav>
        <a href="#">PETS</a>
        <a href="#">NOVO PET</a>
        <a href="#">SAIR</a>
      </nav>
    </div>
  );
}

export default Menu;
