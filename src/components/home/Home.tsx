import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Shadow />
      <Slider>
        <Pane>
          <img src="/image/1.jpg" alt="" />
        </Pane>
        <Pane>
          <img src="/image/2.jpg" alt="" />
        </Pane>
        <Pane>
          <img src="/image/3.jpg" alt="" />
        </Pane>
        <Pane>
          <img src="/image/4.jpg" alt="" />
        </Pane>
        <Pane>
          <img src="/image/5.jpg" alt="" />
        </Pane>
      </Slider>
    </>
  );
};

export default Home;

// Style
const Shadow = styled.div`
  width: 600px;
  height: 30px;
  margin: 330px auto 0;
  border-radius: 50%;
  box-shadow: 0px 12px 10px 3px rgba(0, 0, 0, 0.5);
`;

const Slider = styled.div`
  width: 630px;
  border: 4px solid #fff;
  outline: 1px solid #999;
  height: 313px;
  margin: -315px auto;
  background: -webkit-radial-gradient(#ffefce, #fcd78d);
  background: -moz-radial-gradient(#ffefce, #fcd78d);
  background: -ms-radial-gradient(#ffefce, #fcd78d);
  background: -o-radial-gradient(#ffefce, #fcd78d);
  background: radial-gradient(#ffefce, #fcd78d);
`;

const Pane = styled.div`
  width: 70px;
  height: 300px;
  background: #ccc;
  margin: 5px 0 0 5px;
  float: left;
  transition: all 0.2s ease-out;
  overflow: hidden;
  border: 2px solid #fff;
  outline: 1px solid #999;

  &:hover {
    width: 300px;
  }
`;
