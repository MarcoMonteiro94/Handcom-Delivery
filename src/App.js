import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useReducer,
} from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Categories from "./components/Categories";
import ItemList from "./components/ItemList";
import Submit from "./components/Submit";
import { getGeneralOffers } from "./services/api";
import { cartReducer, defaultCart } from "./stores/cartReducer";

export const CartContext = createContext();

function App() {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);

  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getGeneralOffers().then((res) => {
      setCategories(res?.categories);
      setOffers(res?.offers);
    });
  }, []);

  const onSearch = useCallback(async (searchTerm) => {
    const res = await getGeneralOffers({ searchTerm });
    setCategories(res?.categories);
    setOffers(res?.offers);
  }, []);

  const onCategoryChange = useCallback(async (categoryId) => {
    const res = await getGeneralOffers({ categoryId });
    setOffers(res?.offers);
  }, []);

  return (
    <>
      <CartContext.Provider value={[cart, dispatchCart]}>
        <GlobalStyle />
        <Header onSearch={onSearch} />
        <Categories
          categories={categories}
          onCategoryChange={onCategoryChange}
        />
        <ItemList offers={offers} />
        <Submit />
      </CartContext.Provider>
    </>
  );
}

export default App;
