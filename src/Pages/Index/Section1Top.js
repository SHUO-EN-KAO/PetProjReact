import React from 'react';
import styled from 'styled-components';
import { imgUrl } from '../../config';

const About = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: art;
  .left {
    width: 45%;
    img {
      width: 90%;
    }
  }
  .right {
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      color: $font_color2;
      font-size: 48px;
      font-weight: 900;
      margin-top: 10px;
    }
    p {
      color: $font_color;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;

const Button = styled.button`
  border: none;
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 18px;
  cursor: pointer;
  align-self: flex-end;
  font-family: art;
`;

function Section1Top() {
  return (
    <About>
      <div class="left">
        <img src={`${imgUrl}/images/Cat.png`} alt="" />
      </div>
      <div class="right">
        <h2 className="text_main_dark_color2">彼此珍惜的最佳夥伴</h2>
        <p className="text_main_dark_color1">
          如果交朋友需要一個值得好好相處的理由，那毛孩絕對是人類排第一的益友，不論是哪種毛孩在你生活中，都是有益身心的好夥伴!
        </p>
        <Button className="bg_main_light_color1">珍惜夥伴</Button>
      </div>
    </About>
  );
}

export default Section1Top;
