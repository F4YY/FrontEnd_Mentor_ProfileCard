import React from 'react';
import { Cardbottom, Cardimage, Cardinfo, Cardtop, StyledCard} from './styled/Card.styled';
import profpic from './images/image-victor.jpg';
import { Container } from './styled/Container.styled';

export const Card = () => {
  return (
    <Container>
      <StyledCard>
        <Cardtop/>
        <Cardimage src={profpic} alt='profpic'/>
          <Cardbottom>
            <h4>Victor Crest<span>&nbsp;&nbsp;26</span></h4>
            <h5>London</h5>
            <Cardinfo>
              <div>
                <h6>
                  80K
                </h6>
                <p>
                  Followers
                </p>
              </div>
              <div>
                <h6>
                  803K
                </h6>
                <p>
                  Likes
                </p>
              </div>
              <div>
                <h6>
                  1.4K
                </h6>
                <p>
                  Photos
                </p>
              </div>
            </Cardinfo>
        </Cardbottom>
      </StyledCard>
    </Container>
  );
};
