import React from 'react';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  pathname?: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  pathname,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <StyledLink to="/" isSelected={pathname === '/'}>
          Listagem
        </StyledLink>

        <StyledLink to="/import" isSelected={pathname === '/import'}>
          Importar
        </StyledLink>
      </nav>
    </header>
  </Container>
);

export default Header;
