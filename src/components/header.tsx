import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <h1
        style={{ fontFamily: "Acme, sans-serif" }}
        className="p-5 text-center text-4xl font-bold text-[#F6F0E1]"
      >
        Tic Tac Toe
      </h1>
    </header>
  );
};

export default Header;
