import React from "react";
import data from "data/landingPage.json";
import {
  Header,
  Footer,
  Hero,
  Seo,
  Download,
  Card,
  Features,
  Parallax,
  Team,
  Form,
  Testimonials,
  Faq,
} from "components";

function LandingPage() {
  return (
    <div className="landing-page">
      <Header content={data.header} color={data.colorPrimary} />
      <Hero content={data.hero} />
      <Download content={data.download} />
      <Card content={data.card1} />
      <Seo content={data.seo1} popup={data.popup1} />
      <Card content={data.card2} />
      <Features title={data.featuresTitle} items={data.featureItems} />
      <Parallax />
      <Seo content={data.seo2} popup={data.popup2} />
      <Team title={data.teamTitle} members={data.teamMembers} />
      <Testimonials content={data.testimonials} />
      <Faq content={data.faq} />
      <Form content={data.form} />
      <Footer content={data.footer} />
    </div>
  );
}

export default LandingPage;
