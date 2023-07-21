# ytt-api-copy - YAPI-to-Typescript 油猴插件

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

中文 | [English](README_EN.md)

## 项目简介

ytt-api-copy 是一个用于在 yapi 接口界面复制 yapi-to-typescript 工具生成的请求函数名、请求对应的 React Hook 名、请求参数类型名和请求参数返回值名的油猴插件。yapi-to-typescript 是一个用于将 yapi 接口数据转换为 TypeScript 类型声明文件的工具。通过该油猴插件，您可以在 yapi 接口界面查看接口的同时，方便地复制请求函数名、请求对应的 React Hook 名、请求参数类型名和请求参数返回值名，从而大大提升前端开发效率。

## 油猴插件功能介绍

- **复制请求函数名：** 在 yapi 页面中，点击插件按钮后，自动复制当前请求的函数名，方便在项目中直接使用。

- **复制请求对应的 React Hook 名：** 对于使用 React Hook 的项目，插件可以复制当前请求对应的 React Hook 名，简化代码编写。

- **复制请求参数类型名：** 可以快速复制当前请求的参数类型名，省去手动查找和定义的步骤。

- **复制请求参数返回值名：** 同样地，插件可以复制当前请求的返回值类型名，减少手动维护类型定义。

## 使用方法

1. 首先，确保已安装 Tampermonkey 或其他支持油猴插件的浏览器扩展。

2. 下载并安装本油猴插件。

3. 打开 yapi 页面，进入要查看接口的页面。

4. 点击插件按钮，根据需求复制请求函数名、React Hook 名、请求参数类型名或请求参数返回值名。

5. 将复制的内容粘贴到代码中，并通过 IDE 的代码提示能力导入 yapi-to-typescript 生成的类型或函数。

## yapi-to-typescript 配置

使用 yapi-to-typescript 生成类型和请求函数前，必须在 yapi-to-typescript 配置文件中加入以下配置：

```javascript
getRequestFunctionName(interfaceInfo, changeCase) {
  return changeCase.camelCase(
    `api${interfaceInfo.method}${interfaceInfo.path}`
  );
}
```

根据上述配置生成的类型名字和请求函数名字才能与 ytt-api-copy 复制的类型名字和请求函数名字一致。

## 版权信息

本项目遵循 MIT 开源许可，详情请查阅 [LICENSE](LICENSE) 文件。

## 油猴插件地址

您可以在 [这里](https://greasyfork.org/zh-CN/scripts/465481-ytt-api-copy) 找到 ytt-api-copy 油猴插件。
