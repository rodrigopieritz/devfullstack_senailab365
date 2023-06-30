import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div class="image mx-auto text-center">
        <img
          src="https://img.freepik.com/vetores-gratis/conceito-de-erro-404-para-a-pagina-de-destino_52683-12188.jpg?w=740&t=st=1688168992~exp=1688169592~hmac=8241c34653071aa5166f1451eafcf6172aa9c18f6a51ec2b77ddb8650dad7156"
          class="productImage"
        ></img>
      </div>
      <Footer />
    </>
  );
};
//componentes já estão integrados
