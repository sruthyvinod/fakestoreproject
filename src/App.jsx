import Button from "./components/Button";
import {IoAdd} from "react-icons/io5";

function App() {
  return (
  <div>
    <Button icon={<IoAdd/>} variant="text">Click Me</Button>
  </div>
  );
}
export default App;