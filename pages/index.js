import Head from "next/head";
import { useEffect } from 'react';
import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { Header } from "../components/Header";
import { useWalletConnectClient } from '../contexts/ClientContext.jsx';

export default function Home() {
  const { connect, signer, provider } = useWalletConnectClient();
  console.log({ signer, provider });
  useEffect(() => {
    (async () => {
      // await connect();
    })();
  }, [])

  return (
    <HMSRoomProvider>
    <div>
      <Head>
        <title>Emergence</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Login />
    </div>
    </HMSRoomProvider>
  );
}
