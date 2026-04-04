import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import { Nav } from "./components/nav";
import { LandingPage } from "./components/pages/LandingPage";
import { WhoWeAre } from "./components/pages/WhoWeAre";
import { Services } from "./components/pages/Services";
import { CaseStudies } from "./components/pages/CaseStudies";
import { CaseStudyDetailPage } from "./components/pages/CaseStudyDetailPage";
import { IndustryFootprint } from "./components/pages/IndustryFootprint";
import { Team } from "./components/pages/Team";
import { ResearchUpdates } from "./components/pages/ResearchUpdates";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";
import { CASES } from "./constants/data/cases";

// Toggle this to true when you want to show the "Our AI Operating Engine" section again.
const SHOW_AI_OPERATING_ENGINE_SECTION = false;

const toCaseSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getCaseIndexFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const caseParam = params.get("case");

  if (!caseParam) return null;

  const numericIndex = Number(caseParam);
  if (
    Number.isInteger(numericIndex) &&
    numericIndex >= 0 &&
    numericIndex < CASES.length
  ) {
    return numericIndex;
  }

  const slugIndex = CASES.findIndex((item) => toCaseSlug(item.title) === caseParam);
  return slugIndex === -1 ? null : slugIndex;
};

const buildCaseUrl = (caseIndex) => {
  const url = new URL(window.location.href);

  if (caseIndex === null || caseIndex === undefined) {
    url.searchParams.delete("case");
  } else {
    url.searchParams.set("case", toCaseSlug(CASES[caseIndex].title));
  }

  return `${url.pathname}${url.search}${url.hash}`;
};

export default function App() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
  const pushedCaseStateRef = useRef(false);

  const getStickyNavOffset = () => {
    const navElement = document.querySelector("nav");
    if (!navElement) return 104;

    const { top } = navElement.getBoundingClientRect();
    const topInset = Math.max(0, Math.round(top));
    const navHeight = Math.round(navElement.getBoundingClientRect().height || navElement.offsetHeight || 0);

    return topInset + navHeight + 12;
  };

  const scrollToSectionWithOffset = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetTop = Math.max(
      0,
      Math.round(element.getBoundingClientRect().top + window.scrollY - getStickyNavOffset()),
    );

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  useEffect(() => {
    const syncFromUrl = () => {
      setSelectedCaseIndex(getCaseIndexFromUrl());
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      scrollToSectionWithOffset(sectionId);
    };

    if (selectedCaseIndex !== null) {
      const cleanUrl = buildCaseUrl(null);
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (cleanUrl !== currentUrl) {
        window.history.pushState({}, "", cleanUrl);
      }

      setSelectedCaseIndex(null);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(doScroll);
      });
      return;
    }

    doScroll();
  };

  const handleLogoClick = () => {
    scrollToSection("home");
  };

  const handleHomeClick = () => {
    scrollToSection("home");
  };

  const handleLandingAbout = () => {
    scrollToSection("about");
  };

  const handleLandingService = () => {
    scrollToSection("services");
  };

  const handleLandingCaseStudies = () => {
    scrollToSection("case-studies");
  };

  const handleLandingContact = () => {
    scrollToSection("contact");
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  const handleAboutClick = () => {
    scrollToSection("about");
  };

  const handleServicesClick = () => {
    scrollToSection("services");
  };

  const handleCaseStudiesClick = () => {
    scrollToSection("case-studies");
  };

  const handleLeadershipClick = () => {
    scrollToSection("team");
  };

  const handleExitLanding = () => {
    scrollToSection("about");
  };

  const handleOpenCaseStudy = (index) => {
    const nextUrl = buildCaseUrl(index);
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.pushState({ caseIndex: index }, "", nextUrl);
      pushedCaseStateRef.current = true;
    }

    setSelectedCaseIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseCaseStudy = () => {
    const hasCaseInUrl = new URLSearchParams(window.location.search).has("case");

    if (hasCaseInUrl && pushedCaseStateRef.current) {
      window.history.back();
      return;
    }

    if (hasCaseInUrl) {
      window.history.replaceState({}, "", buildCaseUrl(null));
    }

    setSelectedCaseIndex(null);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSectionWithOffset("case-studies");
      });
    });
  };

  return (
    <>
      <Nav
        onLogoClick={handleLogoClick}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onServicesClick={handleServicesClick}
        onCaseStudiesClick={handleCaseStudiesClick}
        onLeadershipClick={handleLeadershipClick}
        onContactClick={handleContactClick}
        isLanding={true}
      />
      {selectedCaseIndex === null ? (
        <>
          <LandingPage
            onExit={handleExitLanding}
            onHome={handleHomeClick}
            onAbout={handleLandingAbout}
            onService={handleLandingService}
            onCaseStudies={handleLandingCaseStudies}
            onContact={handleLandingContact}
            showLocalHeader={false}
          />
          <WhoWeAre />
          <Services />
          <CaseStudies onOpenCaseStudy={handleOpenCaseStudy} />
          <IndustryFootprint />
          <Team />
          {SHOW_AI_OPERATING_ENGINE_SECTION && <ResearchUpdates />}
          <Contact />
        </>
      ) : (
        <CaseStudyDetailPage
          caseStudy={CASES[selectedCaseIndex]}
          caseIndex={selectedCaseIndex}
          onBack={handleCloseCaseStudy}
        />
      )}
      <Footer />
    </>
  );
}
