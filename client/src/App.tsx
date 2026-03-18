import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SOC from "./pages/SOC";
import NOC from "./pages/NOC";
import MDR from "./pages/MDR";
import Vulnerabilidades from "./pages/Vulnerabilidades";
import Pentest from "./pages/Pentest";
import GRC from "./pages/GRC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Platform from "./pages/Platform";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/soc"} component={SOC} />
      <Route path={"/noc"} component={NOC} />
      <Route path={"/mdr"} component={MDR} />
      <Route path={"/vulnerabilidades"} component={Vulnerabilidades} />
      <Route path={"/pentest"} component={Pentest} />
      <Route path={"/grc"} component={GRC} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path="/#plataforma" component={Platform} />
      <Route path="/plataforma" component={Platform} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
