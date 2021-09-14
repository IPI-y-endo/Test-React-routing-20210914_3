import { Children } from "react";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  //  /:idとするとidをURLパラメータとして受け取る
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
