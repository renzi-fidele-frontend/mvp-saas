import { IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import { NavGroup, NavItem, PersonaAvatar, Sidebar, SidebarSection, SidebarToggleButton } from "@saas-ui/react";

//  Icons
import { FaHouse } from "react-icons/fa6";
import { FiHome, FiSettings, FiUsers } from "react-icons/fi";

const SideBar = () => {
   return (
      <Sidebar toggleBreakpoint="sm">
         <SidebarToggleButton />
         <SidebarSection direction="row">
            <Image src="https://saas-ui.dev/favicons/favicon-96x96.png" boxSize="7" />
            <Spacer />
            <Menu>
               <MenuButton as={IconButton} icon={<PersonaAvatar presence="online" size="xs" src="/showcase-avatar.jpg" />} variant="ghost" />
               <MenuList>
                  <MenuItem>Sign out</MenuItem>
               </MenuList>
            </Menu>
         </SidebarSection>
         <SidebarSection aria-label="Main">
            <NavGroup>
               <NavItem icon={<FiHome />} isActive>
                  Home
               </NavItem>
               <NavItem icon={<FiUsers />}>Users</NavItem>
               <NavItem icon={<FiSettings />}>Settings</NavItem>
            </NavGroup>

            <NavGroup title="Teams" isCollapsible>
               <NavItem>Sales</NavItem>
               <NavItem>Support</NavItem>
            </NavGroup>
         </SidebarSection>
      </Sidebar>
   );
};

export default SideBar;
