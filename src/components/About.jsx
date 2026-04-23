import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textNodes = textRefs.current.filter(Boolean);

      gsap.fromTo(
        ".about-title",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        textNodes,
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="section-header">
        <span className="section-title about-title">About Me</span>
      </div>

      <div className="about-content">
        <div className="about-description">
          <p ref={(el) => (textRefs.current[0] = el)}>
            Hi, my name is Rafsan and I enjoy fiddling with numbers and solving problems. My
            interest in data started back in 2022 when I was working on a market research report for
            a startup. The subtle realization of the power of data was all it took to get me hooked
            on the field of data analytics.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)}>
            Since then, I’ve earned a{" "}
            <a
              href="https://www.credly.com/badges/76531ad7-80dc-4eea-8523-983d8b70f941/public_url"
              target="_blank"
              rel="noreferrer"
            >
              Google Data Analytics Certificate
            </a>{" "}
            and built a strong foundation in{" "}
            <span className="highlight">SQL, Tableau, and Python</span>. For me, data analysis feels
            like playing detective—piecing together clues from numbers to reveal the bigger picture.
          </p>

          <p ref={(el) => (textRefs.current[2] = el)}>
            I have a strong appetite for learning and I&apos;m always eager to explore new
            technologies. This website is a testament to my journey where I picked up{" "}
            <span className="highlight">HTML, CSS & JavaScript</span> along the way. I also have a
            background in <span className="highlight"> Graphic Design. </span>
          </p>

          <p ref={(el) => (textRefs.current[3] = el)}>
            While building this website, I used AI tools like ChatGPT, Claude Code and GitHub
            Copilot, which made me realize the transformative power of AI and its future in tech.
            That experience led me to explore local AI models for more data-secure solutions and
            sparked my interest in automation workflows. Since then, I’ve been focused on connecting
            the best of both worlds - AI and automation; to build smooth, scalable systems for data
            pipelines and beyond.
          </p>

          <p ref={(el) => (textRefs.current[4] = el)}>
            Outside of work, I love playing video games. I&apos;m also into aesthetic interior
            designs and I love hoarding cool tech products.
          </p>
        </div>
        <p className="about-timeline-link" ref={(el) => (textRefs.current[5] = el)}>
          <a href="#timeline">
            <span role="img" aria-label="timeline">
              🗺️{" "}
            </span>
            View my <span className="about-timeline-highlight">timeline</span> to learn more about
            my unique journey into data &rarr;
          </a>
        </p>
        <div className="about-actions" ref={(el) => (textRefs.current[6] = el)}>
          <a href="#contact" className="resume-button btn-effect">
            Get in Touch <Icon name="Mail" className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
