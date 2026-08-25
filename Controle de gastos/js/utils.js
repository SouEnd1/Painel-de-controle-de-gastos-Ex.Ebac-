//Funcões utilitarias
const obterElemento = (id) => document.getElementById(id);
const formatarMoeda = (valor) => valor.toFixed(2).replace(".", ",");

//Funções puras
export const valorNegativo = (valor) => valor < 0;

//Atualizar a interface do usuário
export const atualizarInterface = (gastosPorCategoria) => {

  const categorias = gastosPorCategoria.categorias;
  categorias.forEach((categoria) => {
    const elemento = obterElemento(categoria.nome);
    elemento.textContent = `${categoria.nome}: R$ ${formatarMoeda(categoria.valor)}`;
  });

  const elementoTotal = obterElemento("Total");
  elementoTotal.textContent = `Total: R$ ${formatarMoeda(gastosPorCategoria.obterTotal())}`;
};
