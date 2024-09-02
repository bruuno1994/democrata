import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { getProdutos, deleteProduto, updateProduto } from "../services/produtoService";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const limite = 6;
  const [editData, setEditData] = useState(null);

  // Início do Método Read do CRUD

  const findProdutos = async () => {
    const data = await getProdutos(offset, limite)
  
    if(data) {
      setProdutos(data)
      setHasMoreProducts(true)
    }
    if (data.length < limite) {
      setHasMoreProducts(false)
    } 
  }

  // Fim do Método Read do CRUD

  // Início do Método Create do CRUD

  const [produtoData, setProdutoData] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProdutoData({ ...produtoData, [name]: value });
  };

  const handleProdutoNovo = React.useCallback(
    async (e) => {
      e.preventDefault();
  
      const { title, price, description, categoryId, imageUrl } = produtoData;
  
      if (!title.trim() || !description.trim() || !categoryId.trim()) {
        toast.warning("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      if (!imageUrl.trim()) {
        toast.warning("Por favor, insira uma URL válida para a imagem.");
        return;
      }
  
      const newProductData = {
        title,
        price: parseFloat(price),
        description,
        categoryId: parseInt(categoryId),
        images: [imageUrl],
      };
  
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProductData),
          }
        );
  
        if (response.status === 201) {
          toast.success("Produto cadastrado com sucesso!");
          setProdutoData({
            title: "",
            price: "",
            description: "",
            categoryId: "",
            imageUrl: "",
          });
          findProdutos();
        } else {
          const data = await response.json();
          console.error("Erro ao cadastrar produto:", data);
          toast.warning(`Ops, tivemos um problema: ${data.error}`);
        }
      } catch (error) {
        console.log("Registration error:", error);
        toast.warning("Falha no sistema!");
      }
    },
    [produtoData]
  );
  

  // Fim do Método Create do CRUD

  // Início do Método Update do CRUD

  // Função para abrir o formulário de edição com os dados do produto
  const handleEditClick = (produto) => {
    if (produto) {
      setEditData({
        id: produto.id || "", 
        title: produto.title || "",
        price: produto.price || "",
        description: produto.description || "",
        categoryId: produto.categoryId || "",
      });
    }
  };

  // Função para atualizar o produto
  
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const { id, ...updatedData } = editData;
    const updatedProduct = {
      ...updatedData,
    };
    const data = JSON.stringify(updatedProduct)
    await updateProduto(data, id)
    .then(() => {
      findProdutos()
      setEditData(null)
    })
  };

  // Fim do Método Update do CRUD

  // Início do Método Delete do CRUD

  const handleDelete = async (id) => {
    await deleteProduto(id)
    .then(() => {
      findProdutos()
    })
  }

  // Fim do Método Delete do CRUD

  useEffect(() => {
    findProdutos()
  }, [offset]);

  const handleProximaPagina = () => {
    if (hasMoreProducts) {
      setOffset((prevOffset) => prevOffset + limite);
    }
  };

  const handlePaginaAnterior = () => {
    if (offset > 0) {
      setOffset((prevOffset) => prevOffset - limite);
    }
  };

  return (
    <div>
      <Header />

      <h2 class="text-4xl text-center font-serif mt-3">
        Categorias de Produtos
      </h2>

      <div class="flex items-center p-5 m-auto justify-between">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:border-gray-600">
          <Link to="/Sapatos">
            <img
              class="p-8 rounded-t-lg"
              src="sapato.webp"
              alt="imagem do produto 1"
            />
          </Link>

          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold text-center tracking-tight text-gray-900">
              <Link to="/Sapatos"> Sapatos </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:border-gray-600">
          <Link to="/Acessorios">
            <img
              class="p-8 rounded-t-lg"
              src="relogio.webp"
              alt="imagem do produto 1"
            />
          </Link>

          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold text-center tracking-tight text-gray-900">
              <Link to="/Acessorios"> Acessórios </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:border-gray-600">
          <Link to="/Roupas">
            <img
              class="p-8 rounded-t-lg"
              src="jaqueta.jpg"
              alt="imagem do produto 3"
            />
          </Link>
          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold text-center tracking-tight text-gray-600">
              <Link to="/Roupas"> Roupas </Link>
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
      </div>

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10" />

      <div class="flex items-center justify-center">
        <Link to="/ProdutosFiltrados">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
          >
            Filtrar por Preço
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
          >
            Voltar
          </button>
        </Link>
      </div>

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10" />

      <h2 class="text-4xl text-center font-serif mt-3">
        Linha completa de Produtos
      </h2>

      {/* Início da Lista de Produtos */}

      <div class="flex flex-wrap items-center p-5 m-auto justify-between gap-4">
        {produtos.map((item) => (
          <div
            key={item.id}
            class="w-full h-108 max-w-sm bg-white border border-gray-300 rounded-lg shadow flex flex-col hover:border-gray-600"
          >
            <img
              class="p-8 rounded-t-lg"
              src={item.images}
              alt="imagem do produto 1"
            />
            <div class="px-5 pb-5">
              <h5 class="text-lg text-center font-semibold truncate tracking-tight text-gray-900">
                {item.title}
              </h5>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
              </div>

              <h5 class="text-3xl text-center font-semibold truncate tracking-tight text-gray-900">
                R$ {item.price},00
              </h5>
            </div>
            <div class="flex items-center justify-evenly p-5">
              <button
                onClick={() => handleEditClick(item)}
                type="button"
                class="flex items-center text-gray-900 bg-white border border-gray-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full px-6 py-3.5 text-base me-2 mb-2"
              >
                <FaPencilAlt className="mr-2" />
                Editar
              </button>

              <button
                onClick={() => handleDelete(String(item.id))}
                type="button"
                class="flex items-center text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-6 py-3.5 text-base text-center me-2 mb-2 "
              >
                <MdDeleteForever className="mr-2" />
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fim da Lista de Produtos */}

      {/* Início dos Botões de paginação  */}
      <div class="flex items-center justify-center m-auto p-5">
        <button
          type="button"
          onClick={handlePaginaAnterior}
          disabled={offset === 0}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Anterior
        </button>

        <button
          type="button"
          onClick={handleProximaPagina}
          disabled={!hasMoreProducts}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Próximo
        </button>
      </div>
      {/* Fim dos Botões de Paginação */}

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10" />
      <br />

      {/* Início do Formulário de Cadastro */}
      <div class="flex items-center justify-evenly m-auto p-5">
        <h2 class="text-4xl text-center font-serif mt-3">
          Cadastrar um novo produto
        </h2>

        {editData && (
          <h2 class="text-4xl text-center font-serif mt-3">
            Editar um produto
          </h2>
        )}
      </div>

      <div class="flex items-center justify-center m-auto p-5">
        <form class="max-w-sm mx-auto p-10">
          <div>
            <label
              for="Nome"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nome:
            </label>
            <input
              type="text"
              name="title"
              value={produtoData.title}
              onChange={handleInputChange}
              required
              class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="Price"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Preço:
            </label>
            <input
              type="number"
              name="price"
              value={produtoData.price}
              onChange={handleInputChange}
              required
              class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="categoryId"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              ID da Categoria:
            </label>
            <input
              type="number"
              name="categoryId"
              value={produtoData.categoryId}
              onChange={handleInputChange}
              required
              class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Descrição:
            </label>
            <input
              name="description"
              value={produtoData.description}
              onChange={handleInputChange}
              class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="imageUrl"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              URL da Imagem:
            </label>
            <input
              type="text"
              name="imageUrl"
              value={produtoData.imageUrl}
              onChange={handleInputChange}
              class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleProdutoNovo}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 "
          >
            Cadastrar
          </button>
        </form>

        {/* Fim do Formulário de Cadastro */}

        {/* Início do Formulário de Edição */}

        {/* Formulário de Edição */}
        {editData && (
          <form class="max-w-sm mx-auto p-10">
            <div>
              <label
                for="Nome"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Nome:
              </label>
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
                class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="Price"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Preço:
              </label>
              <input
                type="number"
                name="price"
                value={editData.price}
                onChange={(e) =>
                  setEditData({ ...editData, price: e.target.value })
                }
                class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="categoryId"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ID da Categoria:
              </label>
              <input
                type="number"
                name="categoryId"
                value={editData.categoryId}
                onChange={(e) =>
                  setEditData({ ...editData, categoryId: e.target.value })
                }
                class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Descrição:
              </label>
              <input
                name="description"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="imageUrl"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                URL da Imagem:
              </label>
              <input
                type="text"
                name="imageUrl"
                value={editData.imageUrl}
                onChange={(e) =>
                  setEditData({ ...editData, imageUrl: e.target.value })
                }
                disabled={true}
                class="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-100 text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleUpdateProduct}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 "
              type="submit"
            >
              Salvar Alterações
            </button>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 "
              type="button"
              onClick={() => setEditData(null)}
            >
              Cancelar
            </button>
          </form>
        )}
      </div>
      {/* Fim do Formulário de Edição */}

      <Footer />
    </div>
  );
}

export default Produtos;
