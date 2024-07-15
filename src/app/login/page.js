"use client"
import { Button } from "../componets/Button";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="p-6 rounded bg-slate-100 flex flex-col gap-4">
        <div className=" grid grid-cols-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className=" border rounded" />
        </div>
        <div className=" grid grid-cols-2">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" className=" border rounded" />
        </div>
        <button className="bg-sky-400 text-white p-2 rounded">Log in</button>

        <Button onClick={() => alert("hello")}>TEST</Button>
      </div>
    </div>
  );
}
