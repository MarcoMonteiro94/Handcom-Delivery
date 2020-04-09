const API_ENDPOINT = "https://boardapihomolog.smartretail.app/api";

export const getGeneralOffers = async ({
  IdEntrega = 0,
  IdTipoProduto = 0,
  IdVitrine = null,
  ListaIdCategoria = [],
  ListaIdEncarte = [],
  NomeProdutoPesquisaStr = "",
  NomeProdutoStr = "",
  OrdemSecao = 0,
} = {}) => {
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
  ).then((res) => res.json());
  return response;
};

export default {
  getGeneralOffers,
};
