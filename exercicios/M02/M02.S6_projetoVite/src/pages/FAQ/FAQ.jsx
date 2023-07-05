import React, { useContext, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BannerContext } from "../../context/BannerContext/BannerContext";
import QuestionsAnswers from "../../components/QuestionsAnswers/QuestionsAnswers";
import SearchFAQ from "../../components/SearchFAQ/SearchFAQ";

export const Faq = () => {
  const { setTitle, setSubtitle } = useContext(BannerContext);

  useEffect(() => {
    setTitle("Dúvidas?");
    setSubtitle("FAQ");
  }, [setTitle, setSubtitle]);

  return (
    <>
      <Header />
      <Banner />
      <SearchFAQ />
      <QuestionsAnswers />
      <Footer />
    </>
  );
};
