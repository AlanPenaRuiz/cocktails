import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "100%",
    maxHeight: 500,
    display: "block",
  },
  header: {
    padding: "12px 0",
    borderBottom: "1px solid darkgrey",
  },
  content: {
    padding: "12px 0",
    overflow: "scroll",
  },
}));

const Receta = ({ receta }) => {
  // Configuración del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //extraer valores context
  const { informacion, guardarIdReceta, guardarReceta } = useContext(
    ModalContext
  );
  //console.log(informacion);
  //muestra y formatea los ingredientes
  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
          </li>
        );
        // console.log(informacion.idDrink);
      }
    }
    return ingredientes;
  };
  return (
    <div className="col-md-4 mb3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img
          className="card_image"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
          onClick={() => {
            guardarIdReceta(receta.idDrink);
            handleOpen();
          }}
        />

        <Modal
          open={open}
          onClose={() => {
            guardarIdReceta(null);
            guardarReceta({});
            handleClose();
          }}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>{informacion.strDrink}</h2>
            <h3 className="mt-4">Steps</h3>
            <p>{informacion.strInstructions}</p>

            <img className="img-fluid my-4" src={informacion.strDrinkThumb} />

            <h3>Ingredients</h3>
            <ul>{mostrarIngredientes(informacion)}</ul>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Receta;
