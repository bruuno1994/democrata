import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProdutosFiltrados() {
  const [produtosFiltrados, setProdutosFiltrados] = useState();
  const [menorPreco, setMenorPreco] = useState("");
  const [maiorPreco, setMaiorPreco] = useState("");

  const getProdutosFiltrados = async () => {
    try {
      console.log("Valores de preço:", menorPreco, maiorPreco);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/?price_min=${menorPreco}&price_max=${maiorPreco}`
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log("Dados da API:", data);
        setProdutosFiltrados(data);
      } else {
        const data = await response.json();
        console.log("Erro na API:", data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  useEffect(() => {
    console.log(produtosFiltrados);
  }, [produtosFiltrados]);

  return (
    <div>
      <Header />
      <h2 class="text-4xl mt-3 text-center font-serif">Produtos Filtrados</h2>
      <div className="flex items-center justify-center">
        <div class="flex flex-col items-center justify-center m-auto p-5">
          <label
            for="menor"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            <h5 class="text-lg font-semibold text-center truncate tracking-tight text-gray-900">
                Maior que
              </h5>
          </label>
          <input
            type="text"
            name="menor"
            placeholder="R$"
            value={menorPreco}
            onChange={(e) => setMenorPreco(e.target.value)}
            class="block w-3/4 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>

        <div class="flex flex-col items-center justify-center m-auto p-5">
          <label
            for="menor"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            <h5 class="text-lg font-semibold text-center truncate tracking-tight text-gray-900">
                Menor que
              </h5>
          </label>
          <input
            type="text"
            name="maior"
            placeholder="R$"
            value={maiorPreco}
            onChange={(e) => setMaiorPreco(e.target.value)}
            class="block w-3/4 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button
          type="button"
          onClick={getProdutosFiltrados}
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
        >
          Filtrar
        </button>
      </div>

      <div class="flex flex-wrap items-center p-5 m-auto justify-between gap-4">
        {produtosFiltrados?.map((item, index) => (
          <div
            key={index}
            class="w-full h-108 max-w-sm bg-white border border-gray-200 rounded-lg hover:border-gray-600 flex flex-col"
          >
            <img
              class="p-8 rounded-t-lg"
              src={item.images}
              alt="imagem do produto 1"
            />
            <div class="px-5 pb-5">
              <h5 class="text-lg font-semibold text-center truncate tracking-tight text-gray-900">
                {item.title}
              </h5>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
              </div>
              <div class="flex items-center justify-center">
                <span class="text-3xl font-bold text-gray-900">
                  R$ {item.price},00
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="flex items-center justify-center">
        <Link to="/Produtos">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
          >
            Voltar
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ProdutosFiltrados;
