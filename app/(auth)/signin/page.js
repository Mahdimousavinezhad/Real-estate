import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/components/templates/auth/SigninPage";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  
  return <SigninPage />;
}

export default Signin;
