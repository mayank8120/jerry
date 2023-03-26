
import Home from "../Pages/HomePage/Home";
import PropertyDetailPage from "../Pages/PropertyDetailPage/PropertyDetailPage";
import SearchResultsList1 from "../Pages/SearchResultsList1/SearchResultsList1";
import SearchSearchResult2 from "../Pages/SearchSearchResult2/SearchSearchResult2";



export const routesAndElements = [
    {
        path: "/",
        element: (
            <Home />
        ),
    },
    {
        path: "/propertydetailpage1",
        element: (
            <PropertyDetailPage />
        ),
    },
    {
        path: "/searchresultslist1",
        element: (
            <SearchResultsList1 />
        ),
    },
    {
        path: "/searchresultslist2",
        element: (
            <SearchSearchResult2 />
        ),
    },

];
