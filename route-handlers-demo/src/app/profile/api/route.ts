import { headers } from "next/headers";
import {type NextResponse } from "next/server";

export async function GET(request: NextResponse) {  

  // const requestHeader = new Headers(request.headers);
  // console.log(requestHeader.get("Authorization"));

  const headerList = await headers(); 
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Hello, Next.js Route Handlers API!</h1>",{
    headers: { "Content-Type": "text/html" }
  });
}

