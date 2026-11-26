import { ChefHat } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar relative bg-surface shadow-sm">
      <div className="absolute">
        <div className="px-4 text-black text-xl flex justify-center items-center">
          <span className="text-secondary">
            <ChefHat size={32} />
          </span>
          <span>Resep</span>
          <span className="text-secondary">Kita</span>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:flex">
        <ul className="menu menu-horizontal gap-5 text-black px-1">
          <li>
            <a className="hover:bg-primary hover:text-secondary active:border border-border transition-colors duration-200 ease-in-out">
              Beranda
            </a>
          </li>
          <li>
            <a className="hover:bg-primary hover:text-secondary active:border border-border transition-colors duration-200 ease-in-out">
              Kategori
            </a>
          </li>
          <li>
            <a className="hover:bg-primary hover:text-secondary active:border border-border transition-colors duration-200 ease-in-out">
              Favorit
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
