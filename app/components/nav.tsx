import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-20 flex bg-blue-900 text-white text-justify-center items-center gap-4 ">
      <Image
        src="/images/annalogo.png"
        alt="Anna Blanc Logo"
        width={50}
        height={50}
        className="h-full"
      />
      <h1>Anna Blanc</h1>
      <p>Psychologue à domicile.</p>
    </div>
  );
}
