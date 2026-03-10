export async function GET(): Promise<Response> {
  const res = await fetch("http://localhost:3001/api/v1/health", {
    cache: "no-store",
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}
