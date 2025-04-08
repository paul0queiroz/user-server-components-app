// Import necessary modules and components

interface ProductsProps{
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
    };
}

export default function products({product}: ProductsProps) {
    return(
        <div className="p-2 border rounded mb-2">
            <h2 className="text-xl font-semibold ">Nome: {product.name}</h2>
            <p className="text-black/50"><strong>ID do Produto: </strong>{product.id}</p>
            <p className="text-black/50"><strong>Descrição do Produto: </strong>{product.description}</p>
            <h3 className="text-gray-600">Preço:{product.price}</h3>
        </div>
    );
}
