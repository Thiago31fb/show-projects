import "./NavBar.css";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaDev } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const [nav, setNav] = useState("");

  const troca = () => {
    setMenu(!menu);
    if (nav === "") {
      setNav("open");
    } else {
      setNav("");
    }
  };
  const logoClick =()=>{
    if(!menu){
      troca()
    }
  }

  return (
    <header className="ContainerNav">
      <div className="logo">
        <Link to="/" onClick={logoClick}>
          <FaDev />
          <span>T. Barcelo</span>
        </Link>
      </div>
      <ul className={`navbar ${nav}`}>
        <li>
          <NavLink onClick={troca} to="/" exact>
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink onClick={troca} to="/projetos">
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink onClick={troca} to="/contato">
            Contato
          </NavLink>
        </li>
      </ul>
      <div className="bx bx-menu" id="menu-icon" onClick={troca}>
        {menu ? <IoIosMenu /> : <IoMdClose />}
      </div>
    </header>
  );
};

export default NavBar;
