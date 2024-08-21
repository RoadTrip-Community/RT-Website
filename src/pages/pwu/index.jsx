import Hero from "./Hero";
import Sponsors from "./sponsors";
import Partners from "./partners";
import HeaderSEO from "../../components/Header";
import { content } from "../../content";
import Subscribe from "../homeP/Subscribe";

const PartnerWithUs = () => {
  return (
    <>
      <HeaderSEO
        title={content.title_partner}
        url={content.canonical_url_partner}
        description={content.description_partner}
        image={content.OG_Image_partner}
      />

      <Hero />
      <Sponsors />
      <Partners />
      <Subscribe />
    </>
  );
};

export default PartnerWithUs;
