import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TimeLine from '../TimeLine/TimeLine';

function AboutProject() {
  return (
    <section className='project' id='project'>
      <Container>
      <SectionTitle title="О проекте" />
      <ProjectInfo />
      <TimeLine />
      </Container>
    </section>
  );
}

export default AboutProject;