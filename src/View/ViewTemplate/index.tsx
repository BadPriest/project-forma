import React, { ReactNode } from 'react';
import Container from '../Shared/Container';

// import Container from '../Shared/Container';
import VSeparator from '../Shared/VSeparator';

import Footer from './Footer';
import Header from './Header';

import { StyledTemplateWrapper } from './styles';

export interface IPropsViewTemplate {
  children: ReactNode;
}

function ViewTemplate({ children }: IPropsViewTemplate) {
  return (
    <StyledTemplateWrapper>
      <Header />
      <Container>
        {children}
        <VSeparator height="4em" />
      </Container>
      <Footer />
    </StyledTemplateWrapper>
  );
}

export default ViewTemplate;
