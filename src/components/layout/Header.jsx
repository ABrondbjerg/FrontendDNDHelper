import { NavLink , Link } from "react-router-dom";
//import styles from "../../styles/LayoutModule.module.css";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      
        
           {/* Navbar*/}
                <nav className={styles.navbar}>
                  <Link to="/" className={styles.logoLink}>
                    <div className={styles.logo}>DNDHELPER</div>
                  </Link>
                  
                  <div className={styles.navLinks}>
                    <NavLink to="/generators">Generators</NavLink>
                    <NavLink to="/generators/npc">NPC</NavLink>
                    <NavLink to="/generators/town">City</NavLink>
                    <NavLink to="/generators/bbeg">BBEG</NavLink>
                    <NavLink to="/generators/items">Item</NavLink>
                    <NavLink to="/generators/hooks">Hook</NavLink>
                    <NavLink to="/login">Login</NavLink>
                  </div>
                </nav>
        
      
    </header>
  );
}
