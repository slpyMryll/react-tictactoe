import React from "react";

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 border-2 border-black text-3xl font-[Acme] flex items-center justify-center bg-[#D9D9D9] rounded-3xl text-[#363062]"
    >
      {value}
    </button>
  );
}
