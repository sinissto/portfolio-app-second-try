import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded p-1 cursor-pointer ${
        pathname === link.url ? "bg-black text-white" : ""
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
