import AboutHero from "../components/AboutHero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import KeywordBar2 from "../components/KeywordBar2.jsx";
import HistoryTimeline from "../components/HistoryTimeline.jsx";
import AboutOrganicFarms from "../components/AboutOrganicFarms.jsx";
import TeamSection from "../components/TeamSection.jsx";


const Home = () => {
  return (
    <>
      <AboutHero />
      <AboutOrganicFarms/>
      {/* <AboutSection />/ */}
      <KeywordBar2 />
      <TeamSection/>
      <HistoryTimeline />
    </>
  );
};

export default Home;
