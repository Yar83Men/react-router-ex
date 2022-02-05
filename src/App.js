import Header from "./Components/Header";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Main from "./Components/Main";
import Blog from "./Components/Blog";
import Error404 from "./Components/Error404";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
    return(
        <div className="container">
            <Header /> 
           <Router>
               <Routes>
                   <Route path="/" element={<Main/>} />
                   <Route path="/blog" element={<Blog />} />
                   <Route path="/news" element={<News />}/>
                   <Route path="*" element={<Error404 />}/>
               </Routes>
           </Router>
            <Footer />           
        </div>
    )
}

export default App;