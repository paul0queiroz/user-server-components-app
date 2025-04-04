'use client';
interface User{
    id: number;
    nome: string;
    email: string;  
    phone: string;
}

async function fetchUser(userId: number): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);//Correção da interpolação de string na função fetchUser
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function UserDetails({userId}: { userId: number}) {
    const user = await fetchUser(userId);

    return(
        <div>
            <h1>Detalhes do Usuário</h1>
            <p><strong>Nome: </strong>{user.nome}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Phone: </strong>{user.phone}</p>
        </div>
    )
}