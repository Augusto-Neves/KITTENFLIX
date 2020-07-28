import React from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={ {background: "#141414"}}>
     <Menu /> 

     <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
      url={dadosIniciais.categorias[0].videos[0].url} 
      videoDescription={"Então essa página foi feita pra você! Fizemos um compilado dos melhores vídeos da internet com os gatos mais fofos e engraçados que você verá."}
     /> 

     <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
     />

     <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
     />

     <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
     />

     <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
     />

     <Footer />    
    </div>
  );
}

export default Home;