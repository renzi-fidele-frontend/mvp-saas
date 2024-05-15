import "./App.css";
import { AppShell } from "@saas-ui/react";

import { theme as proTheme } from "@saas-ui-pro/react";
import { SaasProvider } from "@saas-ui/react";

import { Box, Heading } from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Teste from "./pages/Teste/Teste";

function App() {
   return (
      <SaasProvider theme={proTheme}>
         <AppShell height="$100vh" /*navbar={<NavBar />}*/ sidebar={<SideBar />}>
            <Box as="main" px={55} py={10}>
               <Heading mb={6}>Conteudo da app</Heading>
               <Teste />
            </Box>
         </AppShell>
      </SaasProvider>
   );
}

export default App;
