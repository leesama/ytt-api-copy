import { useEffect } from "react";
import Button from "../Button";
import camelcase from "lodash.camelcase";
import style from "./style.module.css";
function Panel() {
  useEffect(() => {
    const method = document.querySelector(
      "div.panel-view > div:nth-child(3) > div.ant-col-18.colValue > span.colValue.tag-method"
    )?.innerHTML;
    const path = document
      .querySelector(
        "div.panel-view > div:nth-child(3) > div.ant-col-18.colValue > span:nth-child(2)"
      )
      ?.innerHTML?.replace("/", "");
    // @ts-ignore
    console.log(camelcase([method, path]));
    // @ts-ignore
    console.log(camelcase(["useApi", method, path]));
  }, []);
  return (
    <div className={style.panel}>
      <Button>2222</Button>
      <Button>2222</Button>
      <Button>2222</Button>
    </div>
  );
}

export default Panel;
