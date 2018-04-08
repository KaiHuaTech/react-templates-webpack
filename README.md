## 开始
```
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```


## 其他命令
| `npm run <script>` | 说明 |
| ---- | ---- |
| `start` | 启动开发服务器，开启HMR |
| `dev` | 与 `npm start` 相同 |
| `build` | 打包项目文件 |
| `lint` | 检查 `src` 下文件是否符合规范 |
| `lint：fix` | 检查 `src` 下文件是否符合规范并修复 |


## TODO
1. `pre-commit` 在 sourceTree 中无法正确读取 `commit message`（命令中 ok ）
2. `commitizen` 和 `npm scripts` 交互式生成符合规范的 `commit message`
