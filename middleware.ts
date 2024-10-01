import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const user = request.cookies.get("tm");

  if (!user || !user.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/check_auth`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${user.value}` },
    });

    if (!data.authenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/tm/:path*"],
};
