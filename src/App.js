import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
//Link to=""でURLパス設定
//Swithで各ページへのスイッチング
//Route path=""でLink toで決めたパスでのルート遷移先を決定する
//Routeタグでコンポーネントを囲うことでそのSwitchingの際にコンポーネントが起動する
export default function App() {
  return (
    //BrowserRouterで囲うとRouterが有効化される

    <BrowserRouter>
      <div className="App">
        <Link to="/">Home </Link>
        <Link to="/page1">Page1 </Link>
        <Link to="/page2">Page2</Link>
      </div>
      {
        // 作成したrouter/Router.jsxファイルからRouterクラスを読み込み
        //宣言することでLink toの先がRouter.jsx内で別に書いたものを使用できる
      }
      <Router />
      {/*
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
        {
        //{match:{url}}はpage1遷移の時に受け取るpropsの中のmatch:url、パスの/page1が入っている
        }
          render={({ match: { url } }) => (
            <Switch>
            
        {
        //root パスにexactを付けると完全一致の場合のみ遷移
        //exactを付けない場合、path="/"は"/page1"でも""/page2"でも一番上にあるHomeに遷移する
        }

              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>

          */}
    </BrowserRouter>
  );
}
