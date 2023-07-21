import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import EntryPage from "../pages/EntryPage";
import ListPage from "../pages/ListPage";
import EditPage from "../pages/EditPage";


const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <EntryPage />
         },
         {
            path: 'edit-page',
            element: <EditPage />
         },
         {
            path: 'list-page',
            element: <ListPage />
         }
      ]
   }
]);

export default router;