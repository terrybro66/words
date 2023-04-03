import Head from "next/head";
import Header from "@components/Header";
import Test from "@components/Test";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Words!</title>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
      </main>
    </div>
  );
}
