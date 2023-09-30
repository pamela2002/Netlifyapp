import React from "react";
import {Routes,Route} from "react-router-dom";
import BestEducation from "./components/BestEducation";
import ExpertFaculty from "./components/ExpertFaculty";
import PersonalizedAttention from "./components/PersonalizedAttention";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="main_div">
    <h1 id="heading">Why choose Grad School?</h1>
    <Navbar/>
       <Routes>
    <Route exact path='/' element={<BestEducation/>}></Route>
    <Route exact path ='/expertFaculty' element={<ExpertFaculty/>}></Route>
    <Route exact path ='/personalizedAttention' element ={<PersonalizedAttention/>}> </Route>
   </Routes>
   </div>
  );
}

export default App;
