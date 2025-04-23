"use client";
import { useState, useEffect } from "react";
export default function CriarContador() {
  const [nameContador, setNameContador] = useState("");
  const [ShowCounterName, setShowCounterName] = useState(false);

  return (
    <div className="">
      <div>
        <button>
          <a href="/">Ver todos os meus contadores</a>
        </button>
        <div>
          <span>Adicione um nome ao seu contador:</span>
          <input
            type="text"
            className="border-2 m-1"
            value={nameContador}
            onChange={(e) => setNameContador(e.target.value)}
          />
          <button onClick={() => setShowCounterName(true)}>Confirmar</button>
        </div>
        <div className="flex justify-center w-1/3 h-1/4 bg-gray-400">
          <h1 className={`${ShowCounterName ? "block" : "hidden"}`}>
            {nameContador}
          </h1>
        </div>
      </div>
    </div>
  );
}
