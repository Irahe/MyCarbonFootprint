import React from 'react';

import { Button } from 'antd';

import { Container, NotFoundImage, MainNFMessage } from './style';

import notFoundImageSRC from '../../Assets/img/leafNotFound.jpg';

const NotFound = ({ goTo, ...props }) => (
  <Container {...props}>
    <NotFoundImage alt="not_found" src={notFoundImageSRC} />
    <MainNFMessage>
      Sorry, this page is not ready yet... Come back latter :)
    </MainNFMessage>
    <Button
      type="default"
      onClick={() => {
        goTo('welcome');
      }}
    >
      Go Back Home
    </Button>
  </Container>
);

export default NotFound;
