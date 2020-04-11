import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles';
import Header from './Header';

interface PageProps {}

const PageTemplate: React.FC<PageProps> = ({ children }) => {
  const onClose = () => {
    document.body.classList.remove('with-sidebar');
  };

  return (
    <SiteContainer>
      <div className="site-pusher">
        <Header />

        <div className="site-content">
          <div className="container">{children}</div>
        </div>
        <div onClick={onClose} className="site-cache"></div>
      </div>
    </SiteContainer>
  );
};

export default PageTemplate;

const SiteContainer = styled.div`
  .site-pusher {
    .site-content {
      padding-top: 66px;
      .container {
        overflow: hidden;
        *zoom: 1;
        margin: 0 20px;
      }
    }
  }
  ${media.tablet} {
    height: 100%;
    /* overflow: hidden; */
    .site-pusher {
      height: 100%;
      transition-duration: 0.3s;
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      .site-content {
        /* position: absolute; */
        top: 66px;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 0;
        height: calc(100vh - 66px);
      }
    }
  }
`;
