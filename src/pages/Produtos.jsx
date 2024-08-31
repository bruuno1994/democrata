import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Produtos() {

  const [produtos, setProdutos] = useState([]);
  const [offset, setOffset] = useState(0)
  const limite = 6

const getProdutos = async () => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limite}`);

    if (response.status === 200) {
      const data = await response.json();
      setProdutos(data);
      console.log(data);
    } else {
      const data = await response.json();
      console.log(data.error);
    }
  } catch (error) {
    console.error("Erro ao buscar os sapatos:", error);
  }
};

useEffect(() => {
  getProdutos();
}, [offset]);

const handleProximaPagina = () => {
  setOffset((prevOffset) => prevOffset + limite);
};

const handlePaginaAnterior = () => {
  if (offset > 0) {
    setOffset((prevOffset) => prevOffset - limite);
  }
};

  return (
    <div>
      <Header />

      <h2 class="text-4xl text-center font-serif mt-3" >
        Categorias de Produtos
      </h2>

      <div class="flex items-center p-5 m-auto justify-between">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
          <Link to="/Sapatos">
            <img
              class="p-8 rounded-t-lg"
              src="sapato.webp"
              alt="imagem do produto 1"
            />
          </Link>

          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <Link to="/Sapatos"> Sapatos </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
        <Link to="/Acessorios">
            <img
              class="p-8 rounded-t-lg"
              src="relogio.webp"
              alt="imagem do produto 1"
            />
          </Link>

          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <Link to="/Acessorios"> Acessórios </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
        <Link to="/Roupas">
            <img
              class="p-8 rounded-t-lg"
              src="jaqueta.jpg"
              alt="imagem do produto 3"
            />
          </Link>
          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
            <Link to="/Roupas"> Roupas </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
      </div>

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />

      <h2 class="text-4xl text-center font-serif mt-3" >
       Linha completa de Produtos
      </h2>

      <div class="flex flex-wrap items-center p-5 m-auto justify-between gap-4">
        {produtos.map((item, index) =>
        <div key={index} class="w-full h-108 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700 flex flex-col"
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
        )}
      </div>

      <div class="flex items-center justify-center m-auto p-5">

      <button type="button" onClick={handlePaginaAnterior} disabled={offset === 0} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Anterior</button>

      <button type="button" onClick={handleProximaPagina} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Próximo</button>
</div>

      <Footer />
    </div>
  );
}

export default Produtos;
