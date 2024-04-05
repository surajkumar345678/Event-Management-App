import Link from "next/link";

export default function MenuItem({ title, address }) {
  return (
    <Link href={address} passHref>
      <p className="text-logo-color font-bold">{title}</p>
    </Link>
  );
}
