import Head from "next/head";
import CoinFlip from "../components/CoinFlip/CoinFlip";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {

  return (
    <>
      <Head>
        <title>Flip It!</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Flip/Toss a Coin in a minimal way"/>
        <meta name="keywords" content="Flip, Toss, Coin, heads, head, tails, tail"/>
        <meta name="author" content="Vishwa Gaurav"/>
        <meta name="google-site-verification" content="VijKekS64TgePuSJ-w-tqGIc4kCJuw3lEklP5STaULo" />
      </Head>
      <ThemeToggle />
      <p className="text-gray-800 dark:text-red-400 text-5xl font-bold flex justify-center py-4">Flip-it</p>
      <CoinFlip/>
      <div className="flex items-center justify-center relative py-4 dark:text-gray-200"><a href="https://itsvg.in" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-95 dark:text-red-400">{'</>'} with 💛 by Vishwa Gaurav</a></div>
    </>
  );
}
