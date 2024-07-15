import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold"> About Us</h1>
      <p>My name is Kevin</p>
      <Link className="text-sky-400 hover:underline" href="/">
        Home
      </Link>
    </div>
  );
}
