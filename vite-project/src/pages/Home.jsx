import Hero from "../components/Hero.jsx";
import FeatureSection from "../components/FeatureSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import KeywordBar from "../components/KeywordBar.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProductCategories from "../components/ProductCategories.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import HealthySection from "../components/HealthySection.jsx";
import HistoryTimeline from "../components/HistoryTimeline.jsx";
import BlogPosts from "../components/BlogPosts.jsx";
import BannerCTA from "../components/BannerCTA.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <AboutSection />
      <KeywordBar />
      <ServicesSection />
      <ProductCategories />
      <ImageGallery />
      <Testimonials />
      <LogoStrip />
      <HealthySection />
      <HistoryTimeline />
      <BannerCTA />
      <BlogPosts />
    </>
  );
};

export default Home;
