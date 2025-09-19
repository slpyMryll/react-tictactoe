import React from "react";
import Square from "./Square";

export default function Board() {
  const handleClick = (index: number) => {
    console.log("Square clicked:", index);
  };

  return (
    <>
    <div  className= "mt-40 bg-[#F6F0E1] w-[360px] h-[350px] flex items-center justify-center rounded-3xl">
        <div className="grid grid-cols3">
            <div className="board-row flex gap-1.5">
                <Square value={null} onClick={() => handleClick(0)} />
                <Square value={null} onClick={() => handleClick(1)} />
                <Square value={null} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row flex gap-1.5 pt-1 pb-1">
                <Square value={null} onClick={() => handleClick(3)} />
                <Square value={null} onClick={() => handleClick(4)} />
                <Square value={null} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row flex gap-1.5">
                <Square value={null} onClick={() => handleClick(6)} />
                <Square value={null} onClick={() => handleClick(7)} />
                <Square value={null} onClick={() => handleClick(8)} />
            </div>
        </div>
    </div>
    </>
  );
}