import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { BannerContext } from "../../context/BannerContext/BannerContext";

export const HomePage = () => {
  const { setTitle, setSubtitle } = useContext(BannerContext);

  useEffect(() => {
    setTitle("Bem-Vindor!");
    setSubtitle("Venha nos conhecer");
  }, [setTitle, setSubtitle]);

  const itemList = [
    {
    id: 1,
    nome:'Item 1',
    valor: 15.99,
    descricao: 'descricao do item 1',
    caracteristicas: [
      'característica A',
      'caracteristica B'
    ],
    image:"https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus.jpg"},
        {
      id: 2,
      nome:'Item 2',
      valor: 25.99,
      descricao: 'descricao do item 2',
      caracteristicas: [
        'característica C',
        'caracteristica D',
        'caracteristica E'
      ],
    image:"https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula.jpg"},
  ]
 const renderCards = itemList.map((item)=>{
    
    return (<Card nome={item.nome} valor= {item.valor} descricao= {item.descricao} caracteristicas = {item.caracteristicas} id= {item.id} image={item.image}/>)
 })
  
    return(
        
    <>
      
      <Header />
      <Banner/>
      {renderCards}
      <Footer/>
      
  </>
  
    );
}