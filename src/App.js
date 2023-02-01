import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Tarih from "./Tarih";
import Section from "./Section";
import axios from "axios";

function App() {
  const [tarih, setTarih] = useState("");
  const [data, setData] = useState("");
  const [trtarih, setTrtarih] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=nnmb2PY3BxV8OhyJfNDuinZDMKPl31igl9J9RFUS&date=" +
          tarih
      )
      .then((response) => {
        setData(response.data);
        setTrtarih(trTarih(response.data.date));
      });
  }, [tarih]);

  function trTarih(tarih) {
    let gun = new Date(tarih);
    const day = gun.getDate();
    const month = gun.getMonth() + 1;
    const year = gun.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function tarihDegistirme(tarih) {
    let gun = new Date(tarih);
    const day = gun.getDate();
    const month = gun.getMonth() + 1;
    const year = gun.getFullYear();
    let gercekTarih = `${year}-${month}-${day}`;
    setTarih(gercekTarih);
    setTrtarih(trTarih(tarih));
  }

  return (
    <div className="App">
      <Header />
      <Tarih onChange={tarihDegistirme} />
      <Section data={data} tarih={trtarih} />
    </div>
  );
}

export default App;
