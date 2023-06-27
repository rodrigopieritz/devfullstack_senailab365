/*
const Form =() => {
    return(
            <>Form is Render</>
    )
}

export default Form;*/

import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="p-4 border rounded">
      <h2 className="mb-4">Deixe seu recado</h2>

      <div className="row mb-3">
        <div className="col-md-6 text-start">
          <label htmlFor="name" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-6 text-start">
          <label htmlFor="phone" className="form-label">
            Telefone:
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="email" className="form-label">
          E-mail:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="message" className="form-label">
          Mensagem:
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="10" // Definindo o número de linhas para 5
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default Form;

