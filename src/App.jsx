import { Route, RouterProvider, Routes } from "react-router-dom";
import Describes from "./pages/Describes";
import Stepper from "./components/Stepper";
import Interested from "./pages/Interested";
import RightPlace from "./pages/RightPlace";
import MathLvl from "./pages/MathLvl";
import Review from "./pages/Review";
import LastPage from "./components/LastPage";
import Success from "./pages/Success";

const App = () => {
  return (
    <div className=" flex flex-col  w-11/12 h-full items-center justify-center mt-10  ">
      <Stepper />

       
        <Routes>
          <Route path="/" element={
       <Describes/>
        } />
          <Route path="/interested" element={
        <Interested/>
        } />
          <Route path="/rightplace" element={
        <RightPlace/>
        } />
          <Route path="/mathlvl" element={
      <MathLvl/>
        } />
          <Route path="/review" element={
      <Review/>
        } />
          <Route path="/lastpage" element={
      <LastPage/>
        } />
          <Route path="/success" element={
      <Success/>
        } />
        </Routes>
      
    </div>
  );
};

export default App;
