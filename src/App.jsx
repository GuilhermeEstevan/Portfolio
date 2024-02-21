import RoutesMain from "./routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <RoutesMain />
      <Toaster position="top-right"/>
    </>
  );
}

export default App;
