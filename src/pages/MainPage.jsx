import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="page-container">
      <h1>Main Page for DnDHelper</h1>
      <h2>Welcome to the DnD Helper Application</h2>
      <p>
        This is a site that will help you create and manage your DnD campaigns.
      </p>
      <p>Use our generators to create NPCs, Towns, Big Bad Evil Guys (BBEGs)</p>
      <p>Save your creations by logging in or registering for an account!</p>
      <div className="button-group">
        <Link to="/generators">
          <button>Generators</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
