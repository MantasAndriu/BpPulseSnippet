import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
    name: string
  }

export default function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderItem>{props.name}</HeaderItem>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.section`
    margin-top: 1em;
    display: flex;
    margin-bottom: 2em;
    padding-left: 2em;
`;

const HeaderItem = styled.div`
    width: 50%;
    font-size: 1.5em;
    font-weight: bold;
`;