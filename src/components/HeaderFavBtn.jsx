import React from "react";
import Link from "next/link";

export default function HeaderFavBtn({ title, address, Icon }) {
  return (
    <Link href={address}>
      <div className="flex items-center cursor-pointer">
        <Icon className="text-header-icon-color" />
        <p className="capitalize ml-1 hidden sm:inline">{title}</p>
      </div>
    </Link>
  );
}
