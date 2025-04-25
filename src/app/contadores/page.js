"use client";
import { useState } from "react";

export default function CriarContador() {
  const [nameContador, setNameContador] = useState("");
  const [InputDate, setInputDate] = useState("");
  const [InputTime, setInputTime] = useState("");
  const [saveValueNameContador, setsaveValueNameContador] = useState([]);
  const getDate = new Date();
  const Hour = getDate.getHours();
  const Min = getDate.getMinutes();
  const currentDate = getDate.toDateString().slice(3);

  const saveLocalStorage = () => {
    if (!nameContador.trim() !== "") {
      const newValueNameContador = [...saveValueNameContador, nameContador];
      setsaveValueNameContador(newValueNameContador);
      localStorage.setItem("Nome do Contador", newValueNameContador);
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setNameContador("");
    setInputDate("");
    setInputTime("");
  };

  return (
    <div className="">
      <div>
        <button>
          <a href="/">Ver todos os meus contadores</a>
        </button>

        <div className="flex flex-col">
          <form onSubmit={handlesubmit} className="flex flex-col">
            <span>Adicione um nome ao seu contador:</span>
            <input
              type="text"
              className="border-2 m-1"
              value={nameContador}
              placeholder="Nome do contador"
              onChange={(e) => setNameContador(e.target.value)}
            />
            <span>Data:</span>
            <input
              type="number"
              className="border-2 m-1"
              placeholder={`${currentDate}`}
              value={InputDate}
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
              value={InputTime}
              onChange={(e) => setInputTime(e.target.value)}
            />
          </form>
          <button type="submit" onClick={saveLocalStorage}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
