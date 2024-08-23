import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import RelatedQuestions from "@/components/RelatedQuestions";
import PopUp from "@/components/PopUp";

export default function Home() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <>
      <Head>
        <title>KızlarSoruyor | Ata</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories />
      <div className="home-page">
        <div className="home-page-wrapper">
          <PostCard />
          <RelatedQuestions />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 99,
          cursor: "pointer",
        }}
        onClick={() => setIsPopUpOpen(true)}
      >
        <img src="/images/cta.svg" alt="Call to Action" />
      </div>
      <PopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
    </>
  );
}
