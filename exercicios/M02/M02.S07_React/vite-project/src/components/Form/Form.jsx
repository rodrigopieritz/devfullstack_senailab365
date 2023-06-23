import { useState } from "react";
import Card from "../Card/Card"

function Form() {
  const [formData, setFormData] = useState({
    nickname: "",
    idade: "",
    email: "",
    senha: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  function userData(e) {
    const { id, value } = e.target;
    setFormData((data) => ({ ...data, [id]: value }));
  }

  function userSave(e) {
    e.preventDefault();

    if (
      formData.nickname &&
      formData.idade &&
      formData.email &&
      formData.senha
    ) {
      setSubmittedData((data) => data.concat(formData));
      setFormData({
        nickname: "",
        idade: "",
        email: "",
        senha: "",
      });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
    
  }
  console.log(submittedData);

  

  return (
    <>
      <form className="form-inside-input" onSubmit={userSave} noValidate>
        <div className="bg-light flex-column justify-content-center">
          <div className="row">
            <div className=" col-12 p-3 mb-2">
              <div className="col-4">
                <label htmlFor="Nickname" className="form-label">
                  Nickname
                </label>
              </div>
              <input
                type="text"
                className="form"
                id="nickname"
                placeholder="UserName"
                value={formData.nickname}
                onChange={userData}
              />
            </div>
            <div className=" col-12 p-3 mb-2">
              <div className="col-4">
                <label htmlFor="Age" className="form-label">
                  Idade
                </label>
              </div>
              <input
                type="number"
                className="form"
                id="idade"
                placeholder="35"
                value={formData.idade}
                onChange={userData}
              />
            </div>
            <div className=" col-12 p-3 mb-2">
              <div className="col-4">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
              </div>
              <input
                type="email"
                className="form"
                id="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={userData}
              />
            </div>
            <div className=" col-12 p-3 mb-2">
              <div className="col-4">
                <label htmlFor="Password" className="form-label ">
                  Password
                </label>
              </div>
              <input
                type="password"
                className="form"
                id="senha"
                placeholder="******"
                value={formData.senha}
                onChange={userData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-dark btn-form">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
      <Card data={submittedData} />
    </>
  );
}

export default Form;
