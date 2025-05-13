"use client";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function CriarContador() {
  const [nameContador, setNameContador] = useState("");
  const [InputDate, setInputDate] = useState("");
  const [InputTime, setInputTime] = useState("");
  const [showCounter, setShowCounter] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const saveInputData = () => {
    if (!InputDate || !InputTime) return;
    const [year, month, day] = InputDate.split("-").map(Number);
    const [hour, minute] = InputTime.split(":").map(Number);
    const targetDate = DateTime.fromObject({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: 0,
    });
    const duration = DateTime.now()
      .diff(targetDate, [
        "years",
        "months",
        "days",
        "hours",
        "minutes",
        "seconds",
      ])
      .shiftTo("years", "months", "days", "hours", "minutes", "seconds")
      .toObject();

    setShowCounter(true);
    setHour(duration.hours);
    setMinutes(duration.minutes);
    setDay(duration.days);
    setMonth(duration.months);
    setYear(duration.years);
    setSeconds(Math.floor(duration.seconds || 0));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const [year, month, day] = InputDate.split("-").map(Number);
      const [hour, minute] = InputTime.split(":").map(Number);
      const targetDate = DateTime.fromObject({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: 0,
      });
      const duration = DateTime.now()
        .diff(targetDate, [
          "years",
          "months",
          "days",
          "hours",
          "minutes",
          "seconds",
        ])
        .shiftTo("years", "months", "days", "hours", "minutes", "seconds")
        .toObject();

      setHour(duration.hours);
      setMinutes(duration.minutes);
      setDay(duration.days);
      setMonth(duration.months);
      setYear(duration.years);
      setSeconds(Math.floor(duration.seconds || 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [showCounter, InputDate, InputTime]);

  return (
    <div className="">
      <div>
        <button>
          <a href="/">Ver todos os meus contadores</a>
        </button>

        <div className="flex flex-col">
          <form className="flex flex-col">
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
              type="date"
              className="border-2 m-1"
              placeholder=""
              value={InputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
            <span>Horário:</span>
            <input
              type="time"
              className="border-2 m-1"
              placeholder=""
              value={InputTime}
              onChange={(e) => setInputTime(e.target.value)}
            />
          </form>
          <button type="submit" onClick={saveInputData}>
            Enviar
          </button>
        </div>
        {/* este trecho tem que ser atualizado a cada segudo!
         */}
        {showCounter && (
          <div className="bg-amber-50 flex justify-center  h-28">
            <div className="flex flex-col items-center">
              <h1 className="font-bold">{nameContador}</h1>
              <div className="flex">
                <h1 className="font-bold">
                  {year} Anos {month} Meses {day} Dias {hour} Horas {minutes}{" "}
                  Minutos e {seconds} Segundos
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
