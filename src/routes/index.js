import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import { DefaultLayout, HeaderOnly } from "~/components/Layout";
import Login from "~/pages/Login";

const publicRoutes = [
  {
    path: "/",
    element: Home
  },
  {
    path: "/following",
    element: Following
  },
  {
    path: "/@:nickname",
    element: Profile,
  },
  {
    path: "/search",
    element: Search,
    layout: null
  },
  {
    path: "/upload",
    element: Upload,
    layout: HeaderOnly
  },
  ,
  {
    path: "/login",
    element: Login,
    layout:null
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
