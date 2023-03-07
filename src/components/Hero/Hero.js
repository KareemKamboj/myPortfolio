import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Kareem Kamboj's Portfolio
      </SectionTitle>
      <SectionText>
      As a full stack software engineer, I am deeply passionate about building engaging, user-friendly applications and learning more about AI technology. As a recent graduate of a coding bootcamp, I have honed my skills and built a portfolio of four technical projects that demonstrate my abilities as a developer. Though I may be new to the field, I am dedicated to constantly learning and growing, and am excited to contribute my skills and knowledge to the industry.
      </SectionText>
      <Button onClick={() => window.location = ' https://docs.google.com/document/d/e/2PACX-1vSc36gRZn343-gQmzAmRKdTADW0mbJcBF0Zbu-40t1ysgdLhje-S09KMPeFsEgkiAbal_E43ze0W_nB/pub'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;