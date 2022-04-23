import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, H1, ServicesWrapper, ServicesCard, ServicesIcon,H2, P } from './ServicesElements'

const Services = () => {
  return (
   <ServicesContainer id='services'>
       <H1>
           Our Services
       </H1>
       <ServicesWrapper>
           <ServicesCard>
               <ServicesIcon src={Icon1} />
                   <H2>Reduce expences</H2>
                   <P>
                       We help reduce your fees and increase your overall revenue.
                   </P>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon2} />
                   <H2>Virtual Offices</H2>
                   <P>
                       You can access our platform online anywhere in the world.
                   </P>
           </ServicesCard>
           <ServicesCard>
               <ServicesIcon src={Icon3} />
                   <H2>Premium Benefits</H2>
                   <P>
                       Unlock our special membership card that returns 5% cash back.
                   </P>
           </ServicesCard>
       </ServicesWrapper>
   </ServicesContainer>

  )
}

export default Services