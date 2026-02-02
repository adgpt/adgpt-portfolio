import React, { useState } from "react";

const Navigation = ({ onLinkClick }) => {
  return (
    <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      <li>
        <a href="#home" onClick={onLinkClick} className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={onLinkClick} className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={onLinkClick} className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="#experiences" onClick={onLinkClick} className="nav-link">
          Experiences
        </a>
      </li>
      <li>
        <a href="#contact" onClick={onLinkClick} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur-lg bg-primary/80">
      <div className="mx-auto c-space max-w-7xl flex items-center justify-between py-3">
        <a href="#home" className="text-lg font-semibold">
          Abhinav
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:block">
          <Navigation onLinkClick={closeMenu} />
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden px-3 py-2 rounded-md"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-primary/95 border-t border-white/5">
          <div className="mx-auto c-space max-w-7xl py-4">
            <Navigation onLinkClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
