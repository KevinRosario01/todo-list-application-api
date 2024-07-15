import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto text-xl">
      Hello World!
      <p>
        <Link className="text-sky-400 hover:underline" href="/login">
          Login
        </Link>
      </p>
      <p>
        <Link className="text-sky-400 hover:underline" href="/about-us">
          About Us
        </Link>
      </p>
    </div>
  );
}
