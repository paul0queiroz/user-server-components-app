// This is a Next.js 13.4+ app directory example
// using the new `fetch` API with `cache: 'no-store'`
// and `async/await` syntax.
// This example fetches user data from a public API
// and displays it on the page.
// Note: This example uses TypeScript syntax.
// You can convert it to JavaScript by removing type annotations.
// app/page.tsx
import React from 'react';
import './globals.css';
import FavoriteList from './components/FavoriteList';
import ProductsProps from './components/Product';


export default function Home({children}: {children: React.ReactNode}) {
  const favoritos = [
    {id: 1, name: "Produto 1", description: "Descrição do Produto 1", price: 10.0},
    {id: 2, name: "Produto 2", description: "Descrição do Produto 2", price: 20.0},
    {id: 3, name: "Produto 3", description: "Descrição do Produto 3", price: 30.0},
  ];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Lista de Produtos Favoritos</h1>
      <FavoriteList>
        {favoritos.map((prod) => (
          <ProductsProps key={prod.id} product={prod}/>
        ))}
      </FavoriteList>
    </main>
  )
}