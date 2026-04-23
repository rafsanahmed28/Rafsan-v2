import React from "react";
import "../styles/NavBar.css";
import Icon from "./Icons";
import { gsap } from "gsap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      lastScrollY: window.scrollY,
      atTop: window.scrollY === 0,
      showStars: props.showStars || false,
      mobileMenuOpen: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleStars = this.toggleStars.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.mobileMenuRef = React.createRef();
    this.hamburgerRef = React.createRef();
    this.navbarRef = React.createRef();
    this.navLinksRef = [];
    this.mobileNavLinksRef = [];
    this.addToDesktopNavRefs = this.addToDesktopNavRefs.bind(this);
    this.addToMobileNavRefs = this.addToMobileNavRefs.bind(this);
    this.logoRef = React.createRef();
    this.initialRenderComplete = false;
    this.starButtonRef = React.createRef();
  }

  addToDesktopNavRefs(el) {
    if (el && !this.navLinksRef.includes(el)) {
      this.navLinksRef.push(el);
    }
  }

  addToMobileNavRefs(el) {
    if (el && !this.mobileNavLinksRef.includes(el)) {
      this.mobileNavLinksRef.push(el);
    }
  }

  toggleStars() {
    if (typeof this.props.setShowStars === "function") {
      this.props.setShowStars((prev) => !prev);
    } else {
      this.setState((prevState) => ({
        showStars: !prevState.showStars,
      }));
    }
  }

  toggleMobileMenu() {
    const { mobileMenuOpen } = this.state;

    this.setState({ mobileMenuOpen: !mobileMenuOpen });

    if (!mobileMenuOpen) {
      gsap.to(this.mobileMenuRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
      gsap.to(this.hamburgerRef.current.querySelector(".line-1"), {
        rotation: 45,
        y: 8,
        duration: 0.3,
      });
      gsap.to(this.hamburgerRef.current.querySelector(".line-2"), { opacity: 0, duration: 0.3 });
      gsap.to(this.hamburgerRef.current.querySelector(".line-3"), {
        rotation: -45,
        y: -8,
        duration: 0.3,
      });

      gsap.set(this.mobileNavLinksRef, {
        autoAlpha: 0,
        y: -15,
        x: -10,
      });

      gsap.to(this.mobileNavLinksRef, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.2)",
        delay: 0.2,
      });
    } else {
      gsap.to(this.mobileMenuRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
      gsap.to(this.hamburgerRef.current.querySelector(".line-1"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
      gsap.to(this.hamburgerRef.current.querySelector(".line-2"), { opacity: 1, duration: 0.3 });
      gsap.to(this.hamburgerRef.current.querySelector(".line-3"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    if (this.navbarRef.current) {
      this.navbarRef.current.style.visibility = "hidden";
    }

    gsap.set(this.mobileMenuRef.current, { x: "100%" });

    gsap.fromTo(
      this.logoRef.current,
      { autoAlpha: 0, y: -10, x: -5 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.2,
        stagger: 0.08,
        ease: "back.out(1.2)",
        delay: 0.6,
      },
    );

    gsap.fromTo(
      this.navbarRef.current,
      { opacity: 0, y: -15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => gsap.set(this.navbarRef.current, { clearProps: "all" }),
      },
    );

    gsap.set(this.navLinksRef, {
      autoAlpha: 0,
      y: -10,
      x: -5,
    });

    gsap.to(this.navLinksRef, {
      autoAlpha: 1,
      y: 0,
      x: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "back.out(1.2)",
      delay: 0.6,
    });

    gsap.fromTo(
      this.starButtonRef.current,
      {
        autoAlpha: 0,
        y: -15,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.07,
        ease: "back.out(1.7)",
        delay: 0.8,
      },
    );

    gsap.fromTo(
      this.hamburgerRef.current,
      {
        autoAlpha: 0,
        y: -15,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.07,
        ease: "back.out(1.7)",
        delay: 1.4,
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;
    const atTop = currentScrollY === 0;

    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      this.setState({ show: false, lastScrollY: currentScrollY, atTop });
    } else {
      this.setState({ show: true, lastScrollY: currentScrollY, atTop });
    }
  }

  render() {
    const { show, atTop, mobileMenuOpen } = this.state;
    const showStars =
      this.props.showStars !== undefined ? this.props.showStars : this.state.showStars;

    return (
      <nav
        ref={this.navbarRef}
        className={`navbar navbar-animated${show ? " navbar-visible" : " navbar-hidden"}${atTop ? " navbar-at-top" : ""}`}
        style={{ zIndex: 1000 }}
      >
        <div
          className="navbar-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <a href="Home" className="navbar-brand" style={{ marginRight: "auto" }}>
            <div className="logo-container btn-effect" ref={this.logoRef}>
              <img
                className="logo"
                src="/assets/logo.png"
                alt="Rafsan Ahmed Logo"
                title="Logo"
                style={{ height: "36px", width: "36px" }}
              />
            </div>
          </a>

          <div className="desktop-nav">
            <div id="basic-navbar-nav">
              <div className="navbar-nav">
                <a className="nav-link" href="#about" ref={this.addToDesktopNavRefs}>
                  About
                </a>
                <a className="nav-link" href="#projects" ref={this.addToDesktopNavRefs}>
                  Projects
                </a>
                <a className="nav-link" href="#timeline" ref={this.addToDesktopNavRefs}>
                  Timeline
                </a>
                <a className="nav-link" href="#experience" ref={this.addToDesktopNavRefs}>
                  Experience
                </a>
                <a className="nav-link" href="#contact" ref={this.addToDesktopNavRefs}>
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mobile-controls">
            <button
              className={`star-btn navbar-star-btn${showStars ? " star-active" : ""}`}
              onClick={this.toggleStars}
              ref={this.starButtonRef}
              title={showStars ? "Disable Background" : "Enable Background"}
              type="button"
            >
              <Icon name="Star" />
            </button>

            <div className="navbar-mobile-divider"></div>

            <button
              className={`hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
              ref={this.hamburgerRef}
              onClick={this.toggleMobileMenu}
              type="button"
              aria-label="Toggle menu"
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>

          <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`} ref={this.mobileMenuRef}>
            <div className="navbar-nav mobile-nav-links">
              <a
                className="nav-link"
                href="#about"
                onClick={this.toggleMobileMenu}
                ref={this.addToMobileNavRefs}
              >
                About
              </a>
              <a
                className="nav-link"
                href="#projects"
                onClick={this.toggleMobileMenu}
                ref={this.addToMobileNavRefs}
              >
                Projects
              </a>
              <a
                className="nav-link"
                href="#timeline"
                onClick={this.toggleMobileMenu}
                ref={this.addToMobileNavRefs}
              >
                Timeline
              </a>
              <a
                className="nav-link"
                href="#experience"
                onClick={this.toggleMobileMenu}
                ref={this.addToMobileNavRefs}
              >
                Experience
              </a>
              <a
                className="nav-link"
                href="#contact"
                onClick={this.toggleMobileMenu}
                ref={this.addToMobileNavRefs}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
