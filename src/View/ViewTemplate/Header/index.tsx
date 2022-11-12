import React, { ReactNode } from 'react';
import { APP_SLOGAN, APP_TITLE } from '../../../Core/App.settings';
import {
  StyledHeaderWrapper,
  StyledHeaderTitle,
  StyledHeaderInfo,
  StyledAsideMenu,
} from './styles';

export interface IPropsHeader {
  brandTitle?: string | ReactNode;
  infoText?: string | ReactNode;
  asideMenu: string | ReactNode;
}

function Header({ brandTitle, infoText, asideMenu }: IPropsHeader) {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitle>{brandTitle || APP_TITLE}</StyledHeaderTitle>
      <StyledHeaderInfo>{infoText || APP_SLOGAN}</StyledHeaderInfo>
      <StyledAsideMenu>{asideMenu}</StyledAsideMenu>
    </StyledHeaderWrapper>
  );
}

export default Header;
