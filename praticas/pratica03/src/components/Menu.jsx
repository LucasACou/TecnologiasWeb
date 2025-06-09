function Menu() {
  return (
    <nav>
      <ul>
        {opcoes.map((opcao, index) => (
          <li key={index}>
            <Link texto={opcao} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;

const opcoes = ["Home", "Perfil", "Sair"];

import Link from "./Link";
