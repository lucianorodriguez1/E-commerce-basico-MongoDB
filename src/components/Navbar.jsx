// import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-[#ea580c] py-2 px-8">
      <Link href="/">
        <p className="text-lg font-bold text-white hover:text-[#ffd166]">
        Inicio
        </p>
      </Link>
      <div className="flex items-center">
        <Link href={"/products/new"}>
          <button className="bg-[#fca5a5] text-white py-2 px-4 rounded-lg hover:bg-[#f87171] transition duration-300">
            Add Product
          </button>
        </Link>
        {/* <div className="flex mr-12">
          <p>Productos</p>
          <p>Nosotros</p>
        </div>
        <FontAwesomeIcon icon={faUser} style={{ width: "30px" }} />
        <FontAwesomeIcon icon={faCartArrowDown} style={{ width: "30px" }} /> */}
      </div>
    </nav>
  );
}
export default Navbar;
