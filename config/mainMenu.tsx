import {
  Home,
  Users,
  Truck,
  Settings,
  Image,
  ShoppingCart,
} from "react-feather";
export const mainMenu = [
  {
    id: "dasboard",
    title: "Dashboard",
    icon: <Home />,
    link: "/",
  },
  {
    id: "_promotor",
    title: "Promotors",
    icon: <Truck />,
    link: "/promotors",
  },
  {
    id: "teams",
    title: "Team",
    icon: <Users />,
    link: "/team",
  },
  {
    id: "products",
    title: "Products",
    icon: <ShoppingCart />,
    link: "/products",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <Image />,
    link: "/marketing",
  },
  {
    id: "separator",
    type: "separator",
  },
  {
    id: "setting",
    title: "Setting",
    icon: <Settings />,
    link: "/setting",
  },
];
