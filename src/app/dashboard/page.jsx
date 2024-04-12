"use client";
import { useSession } from "next-auth/react";

function DashboardUser() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default DashboardUser;
