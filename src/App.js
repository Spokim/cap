import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>The Little Lemon Restaurant</title>
        <meta name="description" content="The Little Lemon restaurant serves delicious food made with fresh ingredients. Come visit us and try our menu today!" />
        <meta property="og:title" content="The Little Lemon Restaurant" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thelittlelemon.com" />
        <meta property="og:image" content="https://www.thelittlelemon.com/images/logo.png" />
        <meta property="og:description" content="The Little Lemon restaurant serves delicious food made with fresh ingredients. Come visit us and try our menu today!" />
        <meta property="og:site_name" content="The Little Lemon Restaurant" />
      </Helmet>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
