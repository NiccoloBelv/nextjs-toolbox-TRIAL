import React, { useState, useRef } from 'react';
import Head from "next/head";
import Header from "@components/Header";
import Image from 'next/image';
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import styles from '@styles/Home.module.css';

export default function Home() {

  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  
  // Funzione per cambiare la visibilità delle descrizioni dei progetti
  const toggleDescriptionVisibility = (projectId) => {
    console.log("Toggle visibility for: ", projectId); // Aggiungi questo per debug
    setVisibleDescriptions(prevState => ({
        ...prevState,
        [projectId]: !prevState[projectId]
    }));
  };

  const sliderRef = useRef(null);

  
  
  const handlePrevClick = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth; // Larghezza del contenitore
      sliderRef.current.scrollLeft -= width / 3; // Sposta a sinistra di un terzo della larghezza del contenitore
    }
  }

  const handleNextClick = () => {
    if (sliderRef.current) {
    const width = sliderRef.current.clientWidth; // Larghezza del contenitore
    sliderRef.current.scrollLeft += width / 3; // Sposta a destra di un terzo della larghezza del contenitore
    }
  }
  
  return (
    <div className="container">
      <Head>
        <title>Caffè e Dolcezze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
         
      <header className={styles.header}>
        <br />
        <div className={styles.profileContainer}>
          <Image
            src="Picture.png"
            alt="Niccolò Belvedere"
            width={210}
            height={210}
            className={styles.profileImage}
          />
          <br />
          <h1> Bar Caffè e Dolcezze</h1>
        </div>
            
        <a href="https://www.linkedin.com/in/niccolo-belvedere/" target="_blank" rel="noopener noreferrer">
            <img 
            src="linkedin.png" 
            alt="LinkedIn" 
            width= "35"
            className={styles.linkedinicon}
            />
        </a>

        <br />      
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about"><strong>Chi Siamo</strong></a></li>
            <li><a href="#projects"><strong>DA INSERIRE</strong></a></li>
            <li><a href="#certificates"><strong>Le Nostre Recensioni</strong></a></li>
            <li><a href="#languagesandskills"><strong>DA INSERIRE</strong></a></li>
            <li><a href="#trips"><strong>Immagini e Fotografie</strong></a></li>
            <li><a href="#contact"><strong>Contatti</strong></a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>

      <section id="about" className={styles.aboutSection}>
          <h2>Chi Siamo</h2>
          <br />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutColumn}>
              {/* Contenuti della prima colonna */}
              <p>In 2019, after years living in my home country, Maratea, I moved to Milan to pursue my studies in Business Administration and Management at Bocconi University. 
              In the following years I took part in several projects, which can be consulted in the Projects area of this portfolio, 
              until I spent an exchange semester in Ottawa (Canada) during my third year of Bachelor, at the Telfer School of Management. 
              Subsequently, in 2022 I started my Master of Science in Management, which led me to an internship at Amazon Business from June 2023 to December 2023 in the area of Business Development and Account Management.</p>
            </div>
            <div className={styles.aboutColumn}>
              {/* Contenuti della seconda colonna */}
              <p>From early on I developed a passion for tech and innovation: during my third year of high school science (2017) I took part in a school work experience on how to develop a startup from 0, 
              creating a prototype and a business model. In 2022, a colleague and I won a "Call4Ideas", drafting an idea about a platform to improve the supply chain of NGOs and presenting the project in front of a jury at the SDA School of Management. 
              Afterwards, I am taking courses and doing self-taught practices to learn coding with various languages.
              I strongly believe that this new technological era will change the course of our lives, and I want to be part of this change.</p>
            </div>
           </div>
          <br />
        </section>
        
        <hr className={styles.hrzigzag} />
        <br />
        
        <section id="projects" className={styles.projectSection}>
          <h2>DA INSERIRE</h2>
        </section>

        <section id="certificates" className={styles.certificatesSection}>
            <h2>Le nostre recensioni</h2>
              <div className={styles.galleryContainer}>
              <div className={styles.imageSlider} ref={sliderRef}>
              
                <div className={styles.imageSlide}>
                  <img src="Kyoto.jpg" alt="Kyoto, Japan" />
                </div>
                {/* ... altre immagini */}
                <div className={styles.imageSlide}>
                  <img src="Fuji2.jpg" alt="Mount Fuji, Japan" />
                </div>
                <div className={styles.imageSlide}>
                  <img src="Fuji.jpg" alt="Mount Fuji, Japan" />
                </div>
                <div className={styles.imageSlide}>
                  <img src="Madrid.jpg" alt="Madrid, Spain" />
                </div>
                <div className={styles.imageSlide}>
                  <img src="maratea.png" alt="Maratea, Italy" />
                </div>
                <div className={styles.imageSlide}>
                  <img src="ny.jpg" alt="New York, US" />
                </div>
                <div className={styles.imageSlide}>
                  <img src="man.jpg" alt="New York, US" />
                </div>
                  
              </div>    
              </div>
                
        </section>  

        <section id="languagesandskills" className={styles.languagesandskillsSection}>
            <h2>DA INSERIRE</h2>
        </section>

        <section id="trips" className={styles.imageGallerySection}>
          <h2>Trips Gallery</h2>
          <br />
            <div className={styles.galleryContainer}>
              <div className={styles.imageSlider} ref={sliderRef}>
              
                <div className={styles.imageSlide}>
                  <img src="Kyoto.jpg" alt="Kyoto, Japan" />
                  <div className={styles.imageDescription}>
                    <h3>Kyoto, Japan</h3>
                    <p>14th February 2024</p>
                  </div>
                </div>
                {/* ... altre immagini */}
                <div className={styles.imageSlide}>
                  <img src="Fuji2.jpg" alt="Mount Fuji, Japan" />
                  <div className={styles.imageDescription}>
                    <h3>Mount Fuji, Japan</h3>
                    <p>10th Febraury 2024</p>
                  </div>
                </div>
                <div className={styles.imageSlide}>
                  <img src="Fuji.jpg" alt="Mount Fuji, Japan" />
                  <div className={styles.imageDescription}>
                    <h3>Mount Fuji, Japan</h3>
                    <p>10th Febraury 2024</p>
                  </div>
                </div>
                <div className={styles.imageSlide}>
                  <img src="Madrid.jpg" alt="Madrid, Spain" />
                  <div className={styles.imageDescription}>
                    <h3>Madrid, Spain</h3>
                    <p>2nd Febraury 2024</p>
                  </div>
                </div>
                <div className={styles.imageSlide}>
                  <img src="maratea.png" alt="Maratea, Italy" />
                  <div className={styles.imageDescription}>
                    <h3>Maratea, Italy</h3>
                    <p>15th August 2023</p>
                  </div>
                </div>
                <div className={styles.imageSlide}>
                  <img src="ny.jpg" alt="New York, US" />
                  <div className={styles.imageDescription}>
                    <h3>New York, US</h3>
                    <p>23th Febraury 2022</p>
                  </div>
                </div>
                <div className={styles.imageSlide}>
                  <img src="man.jpg" alt="New York, US" />
                  <div className={styles.imageDescription}>
                    <h3>New York, US</h3>
                    <p>22th Febraury 2022</p>
                  </div>
                </div>
                  
              </div>
              <span className={`${styles.arrow} ${styles.leftArrow}`} onClick={handlePrevClick}>&#10094;</span>
              <span className={`${styles.arrow} ${styles.rightArrow}`} onClick={handleNextClick}>&#10095;</span>

            </div>
        </section> 
        
        <br />
              
        <section id="contact" className={styles.contactSection}>
          <h2>Contatti</h2>
          <br />
          <div className={styles.contactBar}>
            <div className={styles.contactIcon}>
              <img src="email.png" alt="Email" width= "40" />
              <p>niccolobelvedere01@gmail.com<br />niccolo.belvedere@studbocconi.it</p>
            </div>
            <div className={styles.contactIcon}>
              <img src="position.png" alt="Address" width= "40" />
              <p>Piazza Buraglia, 19<br />85046 Maratea PZ</p>
            </div>
            <div className={styles.contactIcon}>
              <img src="phone.png" alt="Phone" width= "40" />
              <p>0973 877087</p>
            </div>
          </div>
          <FeedbackForm />
          <JokeBlock />
        </section>
                  
      </main>
      <Footer />
    </div>
  );
}
