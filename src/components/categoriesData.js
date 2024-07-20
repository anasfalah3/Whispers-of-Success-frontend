import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

import SpaceCity1 from "../assets/categories/SpaceCity1.jpg";
import SpaceCity5 from "../assets/categories/SpaceCity5.jpeg";
import SpaceCity6 from "../assets/categories/SpaceCity6.jpeg";
import SpaceCity7 from "../assets/categories/SpaceCity7.jpeg";
import SpaceCity8 from "../assets/categories/SpaceCity8.jpeg";
import SpaceCity9 from "../assets/categories/SpaceCity9.jpeg";

export const CategoriesData = [
  {
    icon: RxCrop,
    title: "Art",
    backgroundImage: SpaceCity9,
  },
  {
    icon: RxPencil2,
    title: "Comedy",
    backgroundImage: SpaceCity1,
  },
  {
    icon: RxDesktop,
    title: "Business",
    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Politics",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Books",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Health",
    backgroundImage: SpaceCity8,
  },
];
