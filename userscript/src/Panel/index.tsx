import { useEffect, useState } from "react";
import Button from "../Button";
import camelcase from "lodash.camelcase";
import "./style.css";
import { addLocationChangeCallback, awaitElement } from "../utils";
type Name = {
  requestName: string;
  hookName: string;
  requestTypeName: string;
  responseTypeName: string;
};

function Panel() {
  const [apiName, setApiName] = useState<Name | null>();
  const [msg, setMsg] = useState<string>("");
  const setName = async () => {
    setApiName(null);
    await awaitElement("div.panel-view");
    let elements = document
      .querySelector("div.panel-view")!
      .getElementsByTagName("div");
    let method;
    let path;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (element.textContent?.includes("接口路径：")) {
        let apiDom = element.children[1];
        method = apiDom.children[0].textContent;
        path = apiDom.children[1].textContent;
        break;
      }
    }
    if (!method) {
      setApiName(null);
      return;
    }
    // @ts-ignore
    const requestName = camelcase(["api", method, path]);
    // @ts-ignore
    const hookName = camelcase(["useApi", method, path]);
    // @ts-ignore
    const requestTypeName = "A" + camelcase(["pi", method, path, "Request"]);
    // @ts-ignore
    const responseTypeName = "A" + camelcase(["pi", method, path, "Response"]);

    setApiName({ requestName, hookName, requestTypeName, responseTypeName });
  };
  useEffect(() => {
    addLocationChangeCallback(setName);
  }, []);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      function () {
        setMsg(`复制 ${text} 成功`);
        setTimeout(() => {
          setMsg("");
        }, 2000);
      },
      function (err) {
        setMsg("Error");
      }
    );
  };
  return (
    <div className="ytt-panel">
      {apiName && (
        <>
          <Button title="请求函数" onClick={() => copy(apiName.requestName)}>
            {apiName.requestName}
          </Button>
          <Button title="请求Hook" onClick={() => copy(apiName.hookName)}>
            {apiName.hookName}
          </Button>
          <Button
            title="请求类型"
            onClick={() => copy(apiName.requestTypeName)}
          >
            {apiName?.requestTypeName}
          </Button>
          <Button
            title="返回值类型"
            onClick={() => copy(apiName!.responseTypeName)}
          >
            {apiName.responseTypeName}
          </Button>
        </>
      )}

      <div className="ytt-msg">{apiName ? msg : "请点击接口详情页"}</div>
    </div>
  );
}

export default Panel;
