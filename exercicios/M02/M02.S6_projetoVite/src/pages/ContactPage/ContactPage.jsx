import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import MeetUsCard from "../../components/MeetUsCard/MeetUsCard";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <Banner texto1={"FALE COM A GENTE..."} texto2={"CONTATO"} />
      <Form/>
      <br></br>
      <MeetUsCard/>
      <Footer />
    </>
  );
};
