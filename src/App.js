import {
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="flex justify-center gap-3 items-center max-h-screen h-screen w-screen overflow-auto">
        <TextField size="small" className="" placeholder="Search..." />
       
      </div>
    </ThemeProvider>
  );
};

export default App;
