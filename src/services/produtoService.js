import { toast } from "react-toastify";

export const getProdutos = async (offset, limite) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limite}`
      )

      if (response.status === 200) {
        const data = await response.json()

        if(data && data.length > 0) {
            return data
        } else {
            console.log(data.error);
            
        }
      }  
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error)
    }
  }

export const deleteProduto = async (id) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200 || response.status === 204) {
        toast.success("Produto excluído com sucesso!");
      } 
    } catch (error) {
      console.log("Erro ao excluir o produto:", error);
      toast.warning("Falha ao tentar excluir o produto.");
    }
  };

export const updateProduto = async (data, id) => {
    try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: data,
          }
        );
  
        if (response.ok) {
          toast.success("Produto atualizado com sucesso!");
        } 
      } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
        toast.warning("Falha no sistema!");
      }
}