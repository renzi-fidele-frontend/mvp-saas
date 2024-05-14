import "./App.css";
import { AppShell, NavItem, Navbar, NavbarBrand, NavbarContent, NavbarItem, SearchInput, Sidebar, SidebarSection } from "@saas-ui/react";

// 1. Import the pro theme
import { theme as proTheme } from "@saas-ui-pro/react";

import { SaasProvider } from "@saas-ui/react";
import { Box, Heading } from "@chakra-ui/react";

// 3. Pass the custom theme to SaasProvider
function App() {
   return (
      <SaasProvider theme={proTheme}>
         <AppShell
            height="$100vh"
            navbar={
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
            }
            sidebar={
               <Sidebar>
                  <SidebarSection>
                     <NavItem>Page 1</NavItem>
                     <NavItem>Page 2</NavItem>
                     <NavItem>Page 3</NavItem>
                  </SidebarSection>
               </Sidebar>
            }
         >
            <Box as="main" padding={5}>
               <Heading>Conteudo da app</Heading>
            </Box>
         </AppShell>
      </SaasProvider>
   );
}

export default App;
