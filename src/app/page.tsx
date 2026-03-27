"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Accueil",
          id: "home",
        },
        {
          name: "À propos",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="KIMIAEAT"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="L'expérience culinaire qui éveille vos sens"
      description="Bienvenue chez KIMIAEAT, où la gastronomie moderne rencontre l'élégance intemporelle dans un cadre raffiné."
      buttons={[
        {
          text: "Réserver une table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wide-view-dining-hall-classic-design_114579-2224.jpg"
      videoSrc="https://www.w3schools.com/howto/mov_bbb.mp4?_wi=1"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Une histoire d'excellence et de passion"
      buttons={[
        {
          text: "En savoir plus",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Entrée Signature",
          price: "28€",
          variant: "Frais & Léger",
          imageSrc: "http://img.b2bpic.net/free-photo/toasted-sandwiches-with-thyme-peppercorn-salt-wooden-board_23-2147922300.jpg",
        },
        {
          id: "2",
          name: "Plat de Résistance",
          price: "45€",
          variant: "Tendre & Fondant",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-steak-with-spicy-sauce_140725-951.jpg",
        },
        {
          id: "3",
          name: "Douceur Sucrée",
          price: "18€",
          variant: "Chocolat & Fruits",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-fondue-with-ice-cream-ball-forest-berries-top_114579-2314.jpg",
        },
      ]}
      title="Notre sélection gastronomique"
      description="Découvrez des créations uniques élaborées avec des produits frais et locaux."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sophie Martin",
          handle: "@sophie_m",
          testimonial: "Une expérience exceptionnelle. Le service était impeccable et la cuisine un pur chef-d'œuvre.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-brunette-woman-evening-dress-smiling-holding-champaign-glass_176420-3750.jpg?_wi=1",
        },
        {
          id: "2",
          name: "Marc Dubois",
          handle: "@marcdubois",
          testimonial: "KIMIAEAT est devenu mon restaurant préféré. Raffiné, chic et chaleureux.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-handsome-man-suit-street_158538-10215.jpg",
        },
        {
          id: "3",
          name: "Clara & Tom",
          handle: "@clara_tom",
          testimonial: "Un dîner romantique mémorable. Tout était parfait, de l'entrée au dessert.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-dining-out_23-2149187206.jpg",
        },
        {
          id: "4",
          name: "Jean Lefebvre",
          handle: "@le_gourmet",
          testimonial: "Enfin une gastronomie moderne qui respecte le produit brut. Bravo à toute l'équipe.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-baker-preparing-dough_1170-2284.jpg",
        },
        {
          id: "5",
          name: "Julie Bernard",
          handle: "@julie_b",
          testimonial: "Le cadre est tout simplement sublime. Une adresse incontournable pour les gourmets.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-brunette-woman-evening-dress-smiling-holding-champaign-glass_176420-3750.jpg?_wi=2",
        },
      ]}
      title="Ce que disent nos hôtes"
      description="Des moments inoubliables partagés par nos convives."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Réservation"
      title="Réservez votre table"
      description="Nous avons hâte de vous accueillir chez KIMIAEAT. Complétez le formulaire ci-dessous."
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-posing-with-laptop-street_1153-3538.jpg"
      mediaAnimation="slide-up"
      videoSrc="https://www.w3schools.com/howto/mov_bbb.mp4?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
          ],
        },
        {
          items: [
            {
              label: "Horaires",
              href: "#",
            },
            {
              label: "Adresse",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Politique de confidentialité",
              href: "#",
            },
          ],
        },
      ]}
      logoText="KIMIAEAT"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
