import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SideEle';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>HelloSidebar</CloseIcon>
      </Icon>
      <SidebarWrap>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrap>
    </SidebarContainer>
  )
}

export default Sidebar
