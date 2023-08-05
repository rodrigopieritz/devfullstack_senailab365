import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import MeetUsCard from "../../components/MeetUsCard/MeetUsCard";
import { BannerContext } from "../../context/BannerContext/BannerContext";

export const ContactPage = () => {
  const { setTitle, setSubtitle } = useContext(BannerContext);

  useEffect(() => {
    setTitle("FALE COM A GENTE...");
    setSubtitle("CONTATO");
  }, [setTitle, setSubtitle]);

  return (
    <>
      <Header />
      <Banner />
      <Form />
      <br></br>
      <MeetUsCard />
      <Footer />
    </>
  );
};
