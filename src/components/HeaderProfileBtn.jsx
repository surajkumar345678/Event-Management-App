import React from "react";
import Link from "next/link";

export default function HeaderProfileBtn({ title, address, Icon }) {
  return (
    <Link href={address}>
      <div className="flex items-center cursor-pointer">
        <div className="sm:hidden">
          <Icon className="text-header-icon-color" />
        </div>
        <div className="border border-border-color rounded-md">
          <p className="capitalize ml-1 hidden sm:block py-1 px-2">{title}</p>
        </div>
      </div>
    </Link>
  );
}
