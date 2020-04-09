import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Categories from "./components/Categories";
import ItemList from "./components/ItemList";
import Submit from "./components/Submit";
import { getGeneralOffers } from "./services/api";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getGeneralOffers().then(
      ({ data: { categoriasEmPromocao, promocoesGerais } }) => {
        setCategories(categoriasEmPromocao);
        setProducts(promocoesGerais);
      }
    );
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories categories={categories} />
      <ItemList products={products} />
      <Submit />
    </>
  );
}

export default App;
