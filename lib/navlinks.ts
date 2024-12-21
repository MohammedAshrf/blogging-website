interface NavLink {
  name: string;
  route: string;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "PCs",
    route: "/PCs",
  },
  {
    name: "Phones",
    route: "/Phones",
  },
  {
    name: "Cameras",
    route: "/Cameras",
  },
];

export default navLinks;
