import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  HeroSection,
  ServicesSection,
  ProjectsSection,
  AboutSection,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
