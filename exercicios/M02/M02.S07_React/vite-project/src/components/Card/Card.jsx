import React, { useState } from "react";
import Search from "../Search/Search";

function Card({ data }) {
  const [likes, setLikes] = useState(Array(data.length).fill(0));
  const [editedData, setEditedData] = useState([...data]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleEdit = (index) => {
    const field = prompt("Qual dado você deseja editar? (nickname, idade, email ou senha)");
    if (!field || !["nickname", "idade", "email", "senha"].includes(field.toLowerCase())) {
     
      return;
    }

    const value = prompt(`Digite o novo valor para ${field}:`);
    if (!value) {
      
      return;
    }

    const updatedData = [...editedData];
    updatedData[index][field] = value;

    
    setEditedData(updatedData);
  };

  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Dados Cadastrados</h5>
        <ul className="list-group">
          {editedData.map((item, index) => (
            <li className="list-group-item" key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  <strong>Nickname:</strong> {item.nickname}<br />
                  <strong>Idade:</strong> {item.idade}<br />
                  <strong>Email:</strong> {item.email}<br />
                  <strong>Senha:</strong> {item.senha}<br />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleLike(index)}
                  >
                    Like
                  </button>
                  <span className="badge bg-secondary">{likes[index]}</span>
                  <button
                    type="button"
                    className="btn btn-link edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Search data={data}/>
    </>
  );
}

export default Card;
