import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Usuários Cadastrados</h5>
        <ul className="list-group">
          {data.map((item, index) => (
            <li className="list-group-item" key={index}>
              <strong>Nickname:</strong> {item.nickname}<br />
              <strong>Idade:</strong> {item.idade}<br />
              <strong>Email:</strong> {item.email}<br />
              <strong>Senha:</strong> {item.senha}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
