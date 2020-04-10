export const mapOfferResponseToCategory = (response) => {
  const categoryMap = new Map();

  response.forEach(({ Estoques }) => {
    Estoques.forEach(
      ({
        Produto: {
          TipoProduto: { IdTipoProduto, NomeTipoProdutoStr },
        },
      }) => {
        if (!categoryMap.has(IdTipoProduto)) {
          categoryMap.set(IdTipoProduto, {
            id: IdTipoProduto,
            name: NomeTipoProdutoStr,
          });
        }
      }
    );
  });

  return [...categoryMap.values()];
};

export const mapOfferResponse = (response) =>
  response.map(
    (
      {
        IdPromocao,
        Estoques: [
          {
            IdProduto,
            Produto: { NomeStr },
          },
        ],
        PrecoDoub,
        ImagemPrincipal,
      },
      index
    ) => {
      const imageUrl = ImagemPrincipal?.NomeStr ?? "";

      return {
        offerId: `${IdPromocao}-${index}`,
        productId: IdProduto,
        productName: NomeStr,
        price: PrecoDoub.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        imageUrl,
      };
    }
  );
