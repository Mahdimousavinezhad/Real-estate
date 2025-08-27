import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import DashboardPage from "@/components/templates/dashboard/DashboardPage";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage user={user} />;
}

export default Dashboard;
