import { Artist } from "./pages/Artist";
import { Basket } from "./pages/Basket";
import { StartPage } from "./pages/StartPage";
import { ROUTES } from "./utils/consts";

export const publicRoutes = [
    {
        path: ROUTES.START_PAGE,
        Component: StartPage
    },
    {
        path: ROUTES.ARTIST,
        Component: Artist
    },
    {
        path: ROUTES.BASKET,
        Component: Basket
    }
]