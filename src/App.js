// import React from "react";
// import './index.css';

//  import Home from "./Routes/Home";
// import Contact from "./Routes/Contact";
// import About from "./Routes/About";
// import Project from "./Routes/Project";
// import { Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <>
//     {/* <Routes>
//       <Route path="Home" element= {<Home /> } />
//       <Route path="Project" element= {<Project /> } />
//       <Route path="Contact" element= {<Contact /> } />
//       <Route path="About" element= {<About /> } /> */}





// {/* 
//     </Routes> */}
//     <Routes>
//     <Route path="/Home" element= {<Home /> } />
//     <Route path="/Project" element= {<Project /> } />
//     <Route path="/Contact" element= {<Contact /> } />
//     <Route path="/About" element= {<About /> } />
//     </Routes>
//     {/* <h3> hello</h3> */}
//     </>
//   );
// }

import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Main from "./Component/Main";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

