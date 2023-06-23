import React, { useState } from "react";

function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o nome do usuário"
      />
      <button onClick={handleSearch}>Pesquisar</button>

      {searchResults.length > 0 ? (
        <div>
          <h2>Resultados da pesquisa:</h2>
          {searchResults.map((item, index) => (
            <div key={index}>
              <p>Nickname: {item.nickname}</p>
              <p>Idade: {item.idade}</p>
              <p>Email: {item.email}</p>
              <p>Senha: {item.senha}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Cadastro não encontrado.</p>
      )}
    </div>
  );
}

export default Search;
