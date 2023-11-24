'use client'

import { Header } from "../Header";
import { RequestQuode } from "../RequestQuote";
import { Services } from "../Services";
import { About } from "../About";
import { Projects } from "../Projects";
import { HomePage } from "../HomePage";
import { Footer } from "../Footer";
import { Teams } from "../Teams";
import { Supporters } from "../Supporters";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export function LandingPage() {

  useEffect(() =>{
    Aos.init();
  }, [])

  return (
    <div>
      <Header />

      <main >
        <HomePage />
      </main>

      <About />

      {/* <Projects /> */}

      {/*<Supporters /> */}
{/* 
      <Teams /> */}

      <Services />

      <RequestQuode />

      <Footer />
    </div>
  );
}
