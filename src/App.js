import React from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Categories from "./components/Categories";
import ItemList from "./components/ItemList";
import Submit from "./components/Submit";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <ItemList />
      <Submit />
    </>
  );
}

export default App;
