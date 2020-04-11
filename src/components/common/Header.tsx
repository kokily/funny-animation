import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, useHistory } from 'react-router-dom';
import { media, shadow } from '../../libs/styles';

const Header = () => {
  const history = useHistory();

  const onOpen = () => {
    document.body.classList.add('with-sidebar');
  };

  const onClose = () => {
    document.body.classList.remove('with-sidebar');
  };

  const onCircle = () => {
    history.push('/circle');
  };

  return (
    <HeaderBlock>
      <button onClick={onOpen} className="header_icon"></button>
      <Link to="/" className="header_logo">
        애니메이션
      </Link>

      <Menu>
        <Link onClick={onClose} to="/">
          슬라이더
        </Link>
      </Menu>

      <RightButton onClick={onCircle}>로 딩</RightButton>
    </HeaderBlock>
  );
};

export default Header;

// Style
const HeaderBlock = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 66px;
  line-height: 66px;
  color: #fff;
  background: ${oc.indigo[7]};
  ${shadow(1)};
  .header_icon {
    border: none;
    background: none;
  }
  .header_logo {
    font-size: 1.215rem;
    font-weight: 700;
    padding: 0 25px;
    float: left;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.6);
  }
  ${media.tablet} {
    position: static;
    .header_icon {
      position: relative;
      display: block;
      float: left;
      width: 50px;
      height: 66px;
      border: none;
      background: none;
      cursor: pointer;
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 1rem;
        height: 0;
        top: 16px;
        left: 15px;
        box-shadow: 0 10px 0 1px #fff, 0 16px 0 1px #fff, 0 22px 0 1px #fff;
      }
    }
  }
`;

const Menu = styled.nav`
  float: left;
  a {
    padding: 0 10px;
    &:hover {
      color: ${oc.teal[7]};
    }
  }
  ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #3849a2;
    width: 250px;
    -webkit-transform: translateX(-250px);
    transform: translateX(-250px);
    a {
      display: block;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #3f51b5;
    }
  }
`;

const RightButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 15px;
  width: 80px;
  height: 35px;
  border: 2px solid white;
  border-radius: 4px;
  outline: none;
  background: ${oc.indigo[5]};
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  ${shadow(1)};
  transition: 0.3s all;
  &:hover {
    background: white;
    color: ${oc.indigo[8]};
  }
  &:active {
    transform: translateY(3px);
  }
`;
