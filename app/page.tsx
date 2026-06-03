// import Image from "next/image";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w flex-col items-center justify-between  bg-white dark:bg-blue-400 sm:items-start">
      <Nav />
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-orange-800 sm:text-5xl sm:leading-none">
          Anna Blanc{" "}
        </h1>
        <p className="max-w-md text-lg leading-8 text-black dark:text-blue-200">
          Psychologue à domicile.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacter
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informations
        </a>
      </div>
    </main>
  );
}
