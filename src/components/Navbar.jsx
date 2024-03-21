import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <div className="flex justify-around bg-[#ea580c]">
      <div>Titulo</div>
      <div className="flex">
        <div className="flex mr-12">
          <p>Productos</p>
          <p>Nosotros</p>
        </div>
        <FontAwesomeIcon icon={faUser} style={{ width: "30px" }} />
        <FontAwesomeIcon icon={faCartArrowDown} style={{ width: "30px" }} />
      </div>
    </div>
  );
}

export default Navbar;
