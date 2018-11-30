import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import solutionTop from '../../../img/solution-top.svg';

const Problem = ({ refProp }) => (
  <section ref={refProp} className="problem-section">
    <Container>
      <header className="problem-header">
        <h2 className="problem-title">The Problem</h2>
        <hr />
        <p className="problem-lead">
          Humans are primates, innately social animals. A great part of living a
          happy, healthy and successful existence relies on our ability to craft
          relationships and create mutually beneficial interactions with other
          people.
        </p>
      </header>
    </Container>
    <Grid container divided="vertically">
      <Grid.Row columns={2} className="problem-row">
        <Grid.Column>
          <Image size="large" />
        </Grid.Column>
        <Grid.Column textAlign="left">
          <h4 className="problem-subtitle">Opportunity cost</h4>
          <p className="problem-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            voluptas quibusdam culpa ipsum voluptates est nobis sunt!
            Temporibus, ex! Obcaecati dolores vitae molestiae vero dolore facere
            sit quod! Doloremque.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="problem-row">
        <Grid.Column textAlign="left">
          <h4 className="problem-subtitle">Social conditioning</h4>
          <p className="problem-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            voluptas quibusdam culpa ipsum voluptates est nobis sunt!
            Temporibus, ex! Obcaecati dolores vitae molestiae vero dolore facere
            sit quod! Doloremque.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image size="large" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="problem-row">
        <Grid.Column>
          <Image size="large" />
        </Grid.Column>
        <Grid.Column textAlign="left">
          <h4 className="problem-subtitle">Lack of direction</h4>
          <p className="problem-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            voluptas quibusdam culpa ipsum voluptates est nobis sunt!
            Temporibus, ex! Obcaecati dolores vitae molestiae vero dolore facere
            sit quod! Doloremque.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <img alt="solutionTop" className="solution-section-top" src={solutionTop} />
  </section>
);

export default Problem;
