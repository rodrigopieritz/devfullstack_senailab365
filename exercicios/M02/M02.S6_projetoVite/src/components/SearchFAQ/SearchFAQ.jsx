import React, { useState } from "react";

const SearchFAQ = ({ questions, handleSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = questions.filter((q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    handleSearchResults(results);
  };

  const renderSearchResults = () => {
    if (searchResults.length === 0) {
      return <p>Não foi encontrado nenhum resultado, tente um sinônimo.</p>;
    }

    const resultText = searchResults
      .map((q) => `Verifuqe a pergunta ${q.id}`)
      .join(", ");

    return <p>Dê uma olhada na {resultText}.</p>;
  };

  return (
    <div className="container mt-4">
      <h2>Pesquisa</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma palavra-chave"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </div>
      {renderSearchResults()}
    </div>
  );
};

export default SearchFAQ;
