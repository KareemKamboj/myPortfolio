import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      Through the last year I have worked with the following technolgies: HTML, CSS, JavaScript, Python, C#, MERN, Flask, Bootstrap, React.js, Jinja2, Node.js, Material UI , Figma, tailwindcss,  MySQL, MongoDB, Visual Studio Code, Balsamiq, Trello, Agile, GitHub
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, python, and C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, mySQL, & MongoDB 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/Ux</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, MaterialUI, and tailwindcss
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
