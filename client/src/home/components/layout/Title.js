import React from 'react';
// import { Grid } from 'semantic-ui-react';
import { Button, Grid, Image } from 'semantic-ui-react';
import TitleImage from '../../../img/TitleSection.png';

const Title = ({ scroll }) => (
  <section className="title-section">
    <Grid container columns={2}>
      <Grid.Column className="title-columnone">
        <h2 className="title-title">Change your reality.</h2>
        <h2 className="title-subtitle">
          Learn how to become a social superpower.
        </h2>
        <p className="title-text">
          Socialised is the first online platform for developing your social
          skills in a progressive, action-orientated manner. Your ultimate
          gameplan for becoming incredible in social scenarios.
        </p>
        <Button primary className="title-button" size="big" onClick={scroll}>
          Find out more
        </Button>
      </Grid.Column>
      <Grid.Column className="title-columntwo">
        <Image className="title-image" src={TitleImage} size="big" />
      </Grid.Column>
    </Grid>
  </section>
);

export default Title;
