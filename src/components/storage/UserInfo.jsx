import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="flex gap-2 items-center">
          <Image
            src={session.user.image || "/avatar-testimonial.jpg"}
            alt="user-image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[15px] font-bold">{session.user.name}</h2>
            <h2
              className="text-[13px] text-gray-400
                mt-[-4px]"
            >
              {session.user.email}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserInfo;
