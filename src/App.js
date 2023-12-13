import React, { useEffect, useState } from "react";
import "./App.css";

import Component from "./lib/components/Component";

function App() {
  const onCompClick = () => {
    console.log("Click");
  };

  const tableHeader = {
    name: "Nombre",
    date: "Fecha",
    action: "Acción",
  };

  const tableContent = [
    {
      name: "Nicolás",
      date: "2021-09-01",
      action: "Editar",
    },
    {
      name: "Martina",
      date: "2021-12-16",
      action: "Eliminar",
    },
    {
      name: "Juan",
      date: "2021-10-22",
      action: "Editar",
    },
  ];

  const [countrySelector, setCountrySelector] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        const countries = data.reduce((acc, country) => {
          acc[country.cca2] = country.name.common;
          return acc;
        }, {});
        console.log(countries);
        setCountrySelector(countries);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="">
      <header className="">
        <p className=" text-center text-4xl mt-24">Prueba de npm-component</p>
        <Component
          title="Titulo Prop"
          label="Label Botón Prop"
          tableHeader={tableHeader}
          tableContent={tableContent}
          onCompClick={onCompClick}
          countrySelector={countrySelector}
        />
      </header>
    </div>
  );
}

export default App;
