export default async function Home() {
  const res = await fetch("http://localhost:3000/api/backend/health", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Rollpost Web Alive</h1>
      <h2>Backend Health</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
