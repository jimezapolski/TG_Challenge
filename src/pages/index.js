import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomeContainer from '../containers/HomeContainter';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jimena Zapolski - TG Challenge</title>
        <meta name="description" content="Welcome to the machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`main`}>
        <HomeContainer />
      </main>
      <footer className={`footer`}>
        
      </footer>
    </div>
  );
}
