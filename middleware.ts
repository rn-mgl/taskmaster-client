import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/check_auth`);

    if (!data.authenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/taskmaster/:path*"],
};
