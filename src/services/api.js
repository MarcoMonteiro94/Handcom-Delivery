import { mapOfferResponseToCategory, mapOfferResponse } from "./mappers";

const API_ENDPOINT = "https://boardapihomolog.smartretail.app/api";

export const getGeneralOffers = async ({
  searchTerm = "",
  categoryId = 0,
} = {}) => {
  const IdEntrega = 0;
  const IdTipoProduto = categoryId;
  const IdVitrine = null;
  const ListaIdCategoria = [];
  const ListaIdEncarte = [];
  const NomeProdutoPesquisaStr = searchTerm;
  const NomeProdutoStr = "";
  const OrdemSecao = 0;

  const response = await fetch(
    `${API_ENDPOINT}/PromocoesGeraisMobile?idLoja=10719&pagina=0&quantidadePorPagina=150`,
    {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        IdEntrega,
        IdTipoProduto,
        IdVitrine,
        ListaIdCategoria,
        ListaIdEncarte,
        NomeProdutoPesquisaStr,
        NomeProdutoStr,
        OrdemSecao,
      }),
    }
  )
    .then((res) => res.json())
    .then(({ data: { promocoesGerais = [] } }) => ({
      offers: mapOfferResponse(promocoesGerais),
      categories: mapOfferResponseToCategory(promocoesGerais),
    }));
  return response;
};

export default {
  getGeneralOffers,
};
