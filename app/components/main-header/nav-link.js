"use client";
import Link from "next/link";
import style from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${style.link}
      ${style.active}`
          : style.link
      }
    >
      {children}
    </Link>
  );
}
