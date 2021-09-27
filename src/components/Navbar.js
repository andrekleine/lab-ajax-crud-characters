import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-primary d-flex justify-content-around">
      <Link class="navbar-brand" to="/">
        Characterify
      </Link>
      <Link class="navbar-brand" to="/character/create">
        Create New Character
      </Link>
    </nav>
  );
};

export default Navbar;
