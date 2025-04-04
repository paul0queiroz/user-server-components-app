'use client';
import React, { Suspense } from "react";
import UserDetails from "./userDetails";

class ErrorBoundary extends React.Component<{ children: React.ReactNode}> {
  state = { hasError: false};

  static getDerivedStateFromError(error: Error){
    return { hasError: true};
  }

  componentDidCatch(error: Error) {
    console.error("Erro capturado pelo ErrorBoundary:", error);
  }

  render(){
    if (this.state.hasError){
      return <h1>Ocorreu um erro ao carregar os detalhes do usuário.</h1>;
    }

    return this.props.children;
  }
}
export default function Home(){
  const userId = 1; // Exemplo de ID do usuário
  // Você pode passar o ID do usuário como props ou obtê-lo de outra forma

  return(
    <div>
      <h1>Bem vindo a pagina de detalhes do usuarios</h1>
      <ErrorBoundary>
          <UserDetails userId={userId}  />
      </ErrorBoundary>
      <p>Essa é uma página de exemplo para mostrar como usar o ErrorBoundary e Suspense no Next.js.</p>
      <p>Você pode adicionar mais conteúdo aqui.</p>
    </div>
  );
}