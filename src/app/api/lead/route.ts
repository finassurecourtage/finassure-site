// Relai serveur : le formulaire (finassure.eu) poste ici (même domaine, donc
// aucun souci de CORS/blocage navigateur), et on transmet la candidature au CRM
// (finassure.online) côté serveur.
export const runtime = "nodejs";

const CRM_ENDPOINT = "https://www.finassure.online/api/candidates/create";

export async function POST(req: Request) {
  let body: unknown = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  try {
    await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    /* best-effort : Web3Forms reste le filet de sécurité côté formulaire */
  }
  return Response.json({ ok: true });
}
