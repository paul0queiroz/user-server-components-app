// This is a Next.js 13.4+ app directory example
// using the new `fetch` API with `cache: 'no-store'`
// and `async/await` syntax.
// This example fetches user data from a public API
// and displays it on the page.
// Note: This example uses TypeScript syntax.
// You can convert it to JavaScript by removing type annotations.
// app/page.tsx

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store'
  });
  const user = await res.json();

  return (
    <main>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </main>
  );
}