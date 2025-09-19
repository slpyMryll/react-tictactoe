import React, { useState } from "react";
import Board from "./Board";

type Player = "X" | "O";

const Game: React.FC = () => {
  const [history, setHistory] = useState<(Player | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[currentMove];

  const handleClick = (index: number) => {
    if (currentSquares[index] || calculateWinner(currentSquares) || isDraw(currentSquares)) return;

    const nextSquares = currentSquares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  const winner = calculateWinner(currentSquares);
  const draw = isDraw(currentSquares);

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button
          style={{ fontFamily: "Acme, sans-serif" }}
          className="px-2 py-1 bg-[#F6F0E1] text-sm rounded mt-1 w-full text-left hover:bg-[#ddd]"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className=" flex items-center justify-center">
      {/* Layout: Board in center, history on the right */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 items-center">
        {/* Board */}
        <div className="relative flex flex-col items-center">
          <Board squares={currentSquares} onClick={handleClick} />

          {/* Reset Button */}
          <button
            style={{ fontFamily: "Acme, sans-serif" }}
            className="mt-4 px-6 py-3 bg-[#818FB4] text-[#363062] rounded-2xl"
            onClick={() => {
              setHistory([Array(9).fill(null)]);
              setCurrentMove(0);
              setXIsNext(true);
            }}
          >
            Reset Game
          </button>

          {/* Winner / Draw Message */}
          {(winner || draw) && (
            <div
              style={{ fontFamily: "Acme, sans-serif" }}
              className="absolute top-[70px] bg-[#818FB4] px-6 py-3 rounded-3xl z-10 shadow-lg"
            >
              <h2 className="text-white text-lg font-bold text-center p-4 whitespace-pre-line">
                {winner
                  ? `Congratulations! \n Player ${winner} wins!`
                  : "It's a tie! Try again!"}
              </h2>
            </div>
          )}

          {/* Next Player box */}
          {!winner && !draw && (
            <div
              style={{ fontFamily: "Acme, sans-serif" }}
              className="absolute top-[110px] left-1 bg-[#F6F0E1] text-2xl text-[#363062] px-7 py-4 w-max rounded-2xl shadow-lg"
            >
              {xIsNext ? "X" : "O"}'s Turn
            </div>
          )}
        </div>

        {/* Move History */}
        <div className="w-full flex flex-col bg-[#F6F0E1] text-[#363062] p-4 rounded-lg shadow-md w-48 sm:mt-40 mt-5">
          <h3
            style={{ fontFamily: "Acme, sans-serif" }}
            className="font-bold mb-2 text-2xl"
          >
            Move History
          </h3>
          <ol className="grid grid-cols-5 sm:grid-cols-1 space-y-1">{moves}</ol>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate winner
function calculateWinner(squares: (Player | null)[]): Player | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Helper function to detect draw
function isDraw(squares: (Player | null)[]): boolean {
  return squares.every((square) => square !== null) && !calculateWinner(squares);
}

export default Game;
