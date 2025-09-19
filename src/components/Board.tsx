import React from "react";
import Square from "./Square";

type Player = "X" | "O";

interface BoardProps {
  squares: (Player | null)[];
  onClick: (index: number) => void;
}

export default function Board({ squares, onClick }: BoardProps) {
  return (
    <div className="mt-40 bg-[#F6F0E1] w-[360px] h-[350px] flex items-center justify-center rounded-3xl">
      <div className="grid grid-cols-1">
        <div className="board-row flex gap-1.5">
          <Square value={squares[0]} onClick={() => onClick(0)} />
          <Square value={squares[1]} onClick={() => onClick(1)} />
          <Square value={squares[2]} onClick={() => onClick(2)} />
        </div>
        <div className="board-row flex gap-1.5 pt-1 pb-1">
          <Square value={squares[3]} onClick={() => onClick(3)} />
          <Square value={squares[4]} onClick={() => onClick(4)} />
          <Square value={squares[5]} onClick={() => onClick(5)} />
        </div>
        <div className="board-row flex gap-1.5">
          <Square value={squares[6]} onClick={() => onClick(6)} />
          <Square value={squares[7]} onClick={() => onClick(7)} />
          <Square value={squares[8]} onClick={() => onClick(8)} />
        </div>
      </div>
    </div>
  );
}
