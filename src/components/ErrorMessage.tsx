import React from 'react';
import styled from 'styled-components';

export default function ErrorMessage() {

  return (
    <Container>
        <BiggerText>OOPS...</BiggerText>
        <div>You have entered not existing organization or repository</div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 10em;
    text-align: center;
    font-size: 22px;
`;

const BiggerText = styled.div`
    font-size: 36px;
`;