import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div class="container-fluid bg-dark">
      <div class="row">
        <div class="image col-6">
            <img src={props.image} class="productImage"></img>
        </div>
        <div class="item col-6 bg-dark">
          <ul>
            <li>Nome: {props.nome}</li>
            <li>Valor: {props.valor}</li>
            <li>Descrição: {props.descricao}</li>
            <li>Características: {props.caracteristicas}</li>
            <li>ID:{props.id}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  caracteristicas: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
