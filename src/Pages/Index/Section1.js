import React,{useContext} from 'react';
import Section1Top from './Section1Top';
import Section1Bottom from './Section1Bottom';
import styled from 'styled-components';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';

const Setion = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    width: 40%;
    height: 230px;
    border-top-right-radius: 230px;
    border-bottom-right-radius: 230px;
    top: 12%;
    left: 0px;
    background: ${(props)=>(props.$mode === 'dog'?'#fff5de' :"#a4ced0")};
  }
  &::after{
    content: '';
    position: absolute;
    width: 40%;
    height: 230px;
    border-top-left-radius: 230px;
    border-bottom-left-radius: 230px;
    bottom: 12%;
    right: 0px;
    background: ${(props)=>(props.$mode === 'dog'?'#fff5de' :"#a4ced0")};
  }
`;

const SectionBox = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`

function Section1() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <Setion className='bg_main_light_color2' $mode={mode}>
      <SectionBox>
        <Section1Top />
        <Section1Bottom />
      </SectionBox>
    </Setion>
  );
}

export default Section1;
