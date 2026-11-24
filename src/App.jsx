import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmotionalConnection } from './components/EmotionalConnection';
import { Solution } from './components/Solution';
import { ProductStack } from './components/ProductStack';
import { Differentiation } from './components/Differentiation';
import { TimelineJourney } from './components/TimelineJourney';
import { ExpectedResults } from './components/ExpectedResults';
import { SocialProof } from './components/SocialProof';
import { PricingOffer } from './components/PricingOffer';
import { HowItWorks } from './components/HowItWorks';
import { FaqAccordion } from './components/FaqAccordion';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Emotional Connection Section */}
        <EmotionalConnection />

        {/* 3. The Solution & Product Mockup */}
        <Solution />

        {/* 4. Product Stack & Bonuses */}
        <ProductStack />

        {/* 5. Why Dietfit is Different (Mozambican Ingredients) */}
        <Differentiation />

        {/* 6. The 7-Week Transformation Journey */}
        <TimelineJourney />

        {/* 7. Expected Results & Transparent Disclaimer */}
        <ExpectedResults />

        {/* 8. Social Proof & Real WhatsApp Testimonials */}
        <SocialProof />

        {/* 9. Offer & Dominant Pricing Section */}
        <PricingOffer />

        {/* 10. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 11. FAQ Accordion */}
        <FaqAccordion />

        {/* 12. Emotional Closing Final CTA */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
