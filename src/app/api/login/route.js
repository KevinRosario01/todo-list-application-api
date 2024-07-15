export async function GET({ request }) {
  return Response.json({ result: "Hello MDC" });
}

export async function POST({ request }) {
  return Response.json({ ok: true });
}
