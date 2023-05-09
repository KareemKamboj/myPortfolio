import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Years of Coding Experience', },
  { number: 3, text: 'Programming Languages'},
  { number: 1000, text: 'Hours of Code', },
  { number: 10, text: 'Projects', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Technical Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
