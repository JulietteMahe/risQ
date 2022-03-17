import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import "./Connexion.css";

const Connexion = () => {
  const { user } = useUser();

  return (
    <nav>
      <div className="connexion">
        {!user && (
          <>
            <Link className="connexion-link" to="/login">
              Connexion
            </Link>
            <Link className="connexion-link" to="/register">
              Créer un compte
            </Link>
          </>
        )}
        {user && (
          <>
            <Link className="connexion-link" to="/admin">
              Admin
            </Link>
            <Link className="connexion-link" to="/disconnect">
              Deconnexion
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Connexion;
