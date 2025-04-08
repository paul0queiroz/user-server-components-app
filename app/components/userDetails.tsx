// app/components/server/UserDetails.tsx
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  
  async function fetchUser(userId: number): Promise<User> {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function UserDetails({ userId }: { userId: number }) {
    const user = await fetchUser(userId);
  
    return (
      <div>
        <h1>Detalhes do Usuário</h1>
        <p><strong>Nome: </strong>{user.name}</p>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Telefone: </strong>{user.phone}</p>
      </div>
    );
  }