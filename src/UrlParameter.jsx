import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams(); //関数名（今回id）はpathで決める
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
