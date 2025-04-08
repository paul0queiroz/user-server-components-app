"use client";   

import { useState, useEffect } from "react";

const FavoriteList = ({children}: {children: React.ReactNode}) => {
    const [favoritesList, setFavoritesList] = useState(false)

    //É um botão ternário em JSX. Ele decide qual texto aparecer dentro do botão, dependendo do valor de showFavorites.
    // Se showFavorites for true, o texto será "Esconder Favoritos", caso contrário, será "Mostrar Favoritos".
    //O botão também tem um manipulador de eventos onClick que alterna o valor de showFavorites entre true e false quando o botão é clicado.
    return (
        <>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mb-4" onClick={() => setFavoritesList(!favoritesList)}>
            {favoritesList ? "Esconder Favoritos" : "Mostrar Favoritos"} 
        </button>
        {favoritesList && children}
        </>
    );
}

export default FavoriteList;