# 💰 Controle de Gastos

Aplicação web desenvolvida com **HTML, CSS e JavaScript** para registrar gastos e acompanhar os valores acumulados por categoria.

O projeto foi desenvolvido como exercício prático de programação, com foco em orientação a objetos, modularização do JavaScript e manipulação do DOM.

## ✨ Funcionalidades

- Adicionar gastos informando valor e categoria.
- Organizar os gastos nas categorias:
  - Alimentação
  - Transporte
  - Lazer
  - Outros
- Atualizar automaticamente os totais de cada categoria.
- Calcular o total geral dos gastos.
- Validar os valores informados antes de adicioná-los.
- Formatar os valores exibidos em reais (R$).

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização e layout.
- **JavaScript (ES6+)** — lógica, validação e atualização da interface.
- **ES Modules** — organização do código em módulos.

## 📂 Estrutura do projeto

```text
controle-de-gastos/
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   ├── classes.js
│   └── utils.js
└── README.md
```

## 🧠 Conceitos praticados

Durante o desenvolvimento, foram aplicados conceitos importantes de JavaScript:

- **Programação Orientada a Objetos (POO):** criação das classes `Categoria` e `ListaGastosPorCategoria`.
- **Encapsulamento:** utilização de campos privados para controlar o estado dos objetos.
- **Getters:** acesso aos valores e às categorias.
- **Modularização:** separação das responsabilidades em arquivos JavaScript.
- **Manipulação do DOM:** atualização dos valores exibidos na página.
- **Eventos:** tratamento do envio do formulário.
- **Método `reduce()`:** cálculo do total geral.
- **Validação de dados:** verificação dos valores antes de registrar um gasto.

## 🚀 Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo `index.html` utilizando uma extensão como **Live Server**.
4. Informe o valor do gasto, selecione uma categoria e clique em **Adicionar**.
5. Confira os totais atualizados na tela.

> **Importante:** como o projeto utiliza módulos JavaScript, execute-o por meio de um servidor local, como o Live Server, em vez de abrir o arquivo diretamente pelo navegador.

## 📌 Limitações atuais

- Os gastos não são salvos permanentemente; ao recarregar a página, os valores registrados são perdidos.
- O projeto não utiliza banco de dados nem possui integração com uma API.
- A aplicação trabalha com totais acumulados por categoria, sem histórico individual dos lançamentos.

## 🔮 Melhorias futuras

- Armazenar os dados utilizando `localStorage`.
- Exibir um histórico dos gastos registrados.
- Permitir remover ou editar lançamentos.
- Adicionar gráficos para visualizar os gastos por categoria.
- Implementar testes automatizados.

## 👨‍💻 Autor

**Antonio Neto**

- GitHub: [@SouEnd1](https://github.com/SouEnd1)

---

Projeto desenvolvido como parte dos estudos de desenvolvimento web e programação.
