"use client";
import { useState } from "react";

export default function CriarContador() {
  const [nameContador, setNameContador] = useState("");
  const [ShowCounterName, setShowCounterName] = useState(false);
  const [InputDate, setInputDate] = useState("");
  const [InputTime, setInputTime] = useState("");
  const getDate = new Date();
  const Hour = getDate.getHours();
  const Min = getDate.getMinutes();
  const currentDate = getDate.toDateString().slice(3);
  return (
    <div className="">
      <div>
        <button>
          <a href="/">Ver todos os meus contadores</a>
        </button>
        <div className="flex flex-col">
          <span>Adicione um nome ao seu contador:</span>
          <input
            type="text"
            className="border-2 m-1"
            value={nameContador}
            onChange={(e) => setNameContador(e.target.value)}
          />
          <span>Data:</span>
          <input
            type="number"
            className="border-2 m-1"
            placeholder={`${currentDate}`}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <span>Horário:</span>
          <input
            type="number"
            className="border-2 m-1"
            placeholder={` ${
              Min.toString().length < 2
                ? " " + Hour + ":" + "0" + Min
                : " " + Hour + ":" + Min
            }  `}
            onChange={(e) => setInputTime(e.target.value)}
          />

          <button onClick={() => setShowCounterName(true)}>Confirmar</button>
        </div>
        <div className="flex justify-center w-1/3 h-1/4 ">
          <div className={`${ShowCounterName ? "block" : "hidden"}`}>
            <h1>{nameContador}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
