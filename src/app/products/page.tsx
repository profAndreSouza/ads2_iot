"use client"
import ProductCard from "@/components/cards/ProductCard";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import ProductService from "@/services/ProductService";
import React, { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 8;

export default function Report() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await ProductService.fetchProducts();
          setProducts(data);
        } catch (error) {
          setError('Erro ao buscar produtos'); 
        } finally {
          setLoading(false); 
        }
      };
      fetchProducts();
    }, []);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);


    const currentProducts = products.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );


    const goToPreviousPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };
   
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Listagem de Produtos" username="André Souza" />
            <main>
              
              <div className="p-8 text-center">
                <div className="flex flex-wrap justify-center">
                  {loading ? (
                    <div>Loading...</div>
                  ) : error ? (
                    <div>{error}</div>
                  ) : (
                    currentProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        category={product.category}
                        rate={product.rate}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                      />
                    ))
                  )}

                </div>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-2 rounded ${
                      currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Anterior
                  </button>
                  <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-2 rounded ${
                      currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Próxima
                  </button>
                </div>




              </div>

            </main>
          </div>
        </div>
    );
}

// React Router-DOM