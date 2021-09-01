import React from 'react';
import styled from 'styled-components';

export default function Loader() {

  return (
    <Container>Loading</Container>
  )
}

const Container = styled.div`
    text-align: center;
    color: gray;
`;