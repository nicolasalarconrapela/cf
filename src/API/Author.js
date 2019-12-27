import React, { useState, useEffect } from "react";
import './css/Planet.css';
import { Link } from "react-router-dom";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    // URL de API
    const url_api = "http://localhost:5000"
    const res = await fetch(url_api);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="jk">
      <div><pre>{JSON.stringify(planets, null, 3)}</pre></div>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}
export default Planets;
