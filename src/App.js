import React, { useEffect, useState, useCallback } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Categories from "./components/Categories";
import ItemList from "./components/ItemList";
import Submit from "./components/Submit";
import { getGeneralOffers } from "./services/api";

function App() {
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getGeneralOffers().then((res) => {
      setCategories(res?.categories);
      setOffers(res?.offers);
    });
  }, []);

  const onSearch = useCallback((searchTerm) => {
    return getGeneralOffers({ searchTerm }).then((res) => {
      setCategories(res?.categories);
      setOffers(res?.offers);
    });
  }, []);

  const onCategoryChange = useCallback((categoryId) => {
    return getGeneralOffers({ categoryId }).then((res) => {
      setOffers(res?.offers);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header onSearch={onSearch} />
      <Categories categories={categories} onCategoryChange={onCategoryChange} />
      <ItemList offers={offers} />
      <Submit />
    </>
  );
}

export default App;
