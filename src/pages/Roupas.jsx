import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Roupas() {
  const [roupas, setRoupas] = useState([]);

  const getRoupas = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=0&limit=6"
      );

      if (response.status === 200) {
        const data = await response.json();
        setRoupas(data);
        console.log(data);
      } else {
        const data = await response.json();
        console.log(data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar as roupas:", error);
    }
  };

  useEffect(() => {
    getRoupas();
  }, []);

  return (
    <div>
      <Header />
      <h2 class="text-4xl mt-3 text-center font-serif">
        Confira os nossos produtos dessa categoria
      </h2>
      <div class="flex flex-wrap items-center p-5 m-auto justify-between gap-4">
        {roupas.map((item, index) => (
          <div
            key={index}
            class="w-full h-108 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700 flex flex-col"
          >
            <img
              class="p-8 rounded-t-lg"
              src={item.images}
              alt="imagem do produto 1"
            />
            <div class="px-5 pb-5">
              <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
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

export default Roupas;
