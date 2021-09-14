import { Children } from "react";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    Children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    Children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: true,
    Children: <Page1DetailB />
  }
];
