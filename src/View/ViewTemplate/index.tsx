import React, { ReactNode } from 'react';

import Container from '../Shared/Container';
import VSeparator from '../Shared/VSeparator';

import Footer from './Footer';
import Header, { IPropsHeader } from './Header';

import { StyledTemplateWrapper } from './styles';

export interface IPropsViewTemplate {
  headerProps: IPropsHeader;
  children: ReactNode;
}

function ViewTemplate(props: IPropsViewTemplate) {
  const { headerProps, children } = props;
  const { brandTitle, infoText, asideMenu } = headerProps;

  return (
    <StyledTemplateWrapper>
      <Header
        brandTitle={brandTitle}
        infoText={infoText}
        asideMenu={asideMenu}
      />
      <Container>
        {children}
        <VSeparator height="4em" />
      </Container>
      <Footer />
    </StyledTemplateWrapper>
  );
}

export default ViewTemplate;
