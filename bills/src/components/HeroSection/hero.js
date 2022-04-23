import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent,H1,P,HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElements'
import Video from "../../video/video.mp4";


const HeroSection = () => {
  const [hover, setHover] =useState(false)

  const onHover =() =>{
      setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBackground>
            <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBackground>
        <HeroContent>
            <H1>
                Easy Virtual Banking
            </H1>
            <P>
                Sign up for a new account today and get credited $250 towards your next payment.
            </P>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true">
                    Get Started { hover ? <ArrowForward /> : <ArrowRight /> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection