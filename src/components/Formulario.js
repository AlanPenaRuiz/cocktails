import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  //const [error, setError] = useState(false);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "Ordinary Drink",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  //Leer contenidos
  const obtenerDatosRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center"></fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
            onChange={obtenerDatosRecetas}
          ></input>
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosRecetas}
          >
            <option value="">-- Select category --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search drink"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
