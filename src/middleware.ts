import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sur le domaine finassure.eu, la page d'accueil sert la landing de recrutement
// (/partenaire) tout en gardant l'URL finassure.eu. Les autres domaines (finassure.fr)
// ne sont pas affectés.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.includes("finassure.eu") && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/partenaire";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
