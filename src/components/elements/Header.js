//src/components/elements/Header.js
import React from 'react';
import { Link } from '@reach/router';

import FunFlicksLogo from '../images/funflicks_logo.png';
import APILogo from '../images/api_logo.svg';

import { 
    StyledHeader, 
    StyledFunFlicksLogo, 
    StyledAPILogo
} from '../styles/StyledHeader';

const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      <StyledFunFlicksLogo src={FunFlicksLogo} alt="funflicks-logo" />
    </Link>
    <StyledAPILogo src={APILogo} alt="api-logo" />
  </div>
</StyledHeader>
)

export default Header;