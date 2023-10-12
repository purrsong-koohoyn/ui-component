import { getServerSession } from "next-auth";

export default async function SessionPage() {
  const session = await getServerSession();

  return (
    <>
      getServerSession Result
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
