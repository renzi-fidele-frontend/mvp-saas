import { Navbar, NavbarBrand, NavbarContent, NavbarItem, SearchInput } from "@saas-ui/react";

const NavBar = () => {
   return (
      <Navbar borderBottomWidth="1px" position="sticky" top="0">
         <NavbarBrand>
            <h3>Saas UI App</h3>
         </NavbarBrand>
         <NavbarContent justifyContent="flex-end">
            <NavbarItem>
               <SearchInput size="sm" />
            </NavbarItem>
         </NavbarContent>
      </Navbar>
   );
};

export default NavBar;
