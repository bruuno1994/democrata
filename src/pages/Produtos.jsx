import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Produtos() {
  return (
    <div>
      <Header />

      <h2 class="text-4xl text-center font-extrabold">
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

      <Footer />
    </div>
  );
}

export default Produtos;
