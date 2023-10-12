import { getServerSession } from "next-auth";
import WhoAmIButton from "./who-am-i-button";

const whoAmI = async () => {
  "use server";
  const session = await getServerSession();
  return session?.user?.name || "Not Logged In";
};

export default async function ServerActionPage() {
  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}
