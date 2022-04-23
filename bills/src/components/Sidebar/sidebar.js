import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnwrap,SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="discover">
                    Discover
                </SidebarLink>
                <SidebarLink to="services">
                    Services
                </SidebarLink>
                <SidebarLink to="signup">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnwrap>
                <SidebarRoute to="/signin"> Sign In</SidebarRoute>
            </SideBtnwrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;