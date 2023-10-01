import {
    Routes,
    Route
  } from "react-router-dom";
import AboutPage from '../Pages/AboutPage';
import DetailPage from '../Pages/DetailPage';
import HomePage from '../Pages/HomePage';
import SearchResultPage from '../Pages/SearchResultPage';
  

const Routing = () => {

    return(
        <Routes>
            <Route path='sil-react-template/' element={<HomePage/>}/>
            <Route path='sil-react-template/about' element={<AboutPage/>}/>
            <Route path='sil-react-template/for-developers' element={<AboutPage/>}/>
            <Route path='sil-react-template/search-result'>
                <Route index element={<SearchResultPage/>}/>
                <Route path='detail-page' element={<DetailPage/>}/>
            </Route>
        </Routes>
    )
}

export default Routing;