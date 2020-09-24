import React from 'react'
import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "./components/ThemeProvider";
import Routes from "./routes";
function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}
export default App