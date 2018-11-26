import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import solutionBottom from '../../img/solution-bottom.svg';

const Solution = () => (
  <section className="solution-section">
    <Container>
      <header className="solution-header">
        <h2 className="solution-title">The Solution</h2>
        <hr />
        <p className="solution-lead">
          Humans are primates, innately social animals. A great part of living a
          happy, healthy and successful existence relies on our ability to craft
          relationships and create mutually beneficial interactions with other
          people.
        </p>
      </header>
    </Container>
    <Grid container celled="internally" className="solution-grid">
      <Grid.Row columns={3}>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column className="cell">
          <div className="media">
            <div className="media-icon">
              <Icon name="wheelchair" size="huge" />
            </div>
            <div className="media-body">
              <h5>Example</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente et, voluptas sed itaque quos nihil eius soluta ullam
                consectetur ex odit dolores est ab unde, aliquid molestiae
                delectus! Nam, quae.
              </p>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container>
      <p className="solution-lead">
        Humans are primates, innately social animals. A great part of living a
        happy, healthy and successful existence relies on our ability to craft
        relationships and create mutually beneficial interactions with other
        people.
      </p>
      <Link
        className="big ui button primary solution-button"
        to="/conversationdecoded"
      >
        Explore the System
      </Link>
    </Container>

    <img alt="solution-bottom" src={solutionBottom} />
  </section>
);

export default Solution;
