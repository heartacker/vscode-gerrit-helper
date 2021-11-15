# GerritHelper

GerritHelper, help push to gerrit for review inside VSCode, no need to use command line shell again.

## Features

help push to gerrit for review inside VSCode, no need to use command line shell again.

1. pushg branch to the gerrit, you can click the icon of the git repo title bar,
2. select specific **repo**/**branch** to push, you can also use shortcut key <kbd>Ctrl+Shift+G Ctrl+P</kbd>。

## Extra Features

- 添加几个非常好用的快捷键支持，基本不会和其他插件冲突。
- Add some key shortcut binding for useful command, no conflict with the default and other extensions.

|               快捷键/Short Cut | Description                          | 描述                                                                                                        |
| -----------------------------: | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|        <kbd>Ctrl+Shift+~</kbd> | Creat Terminal With root and profile | 创建新的终端。支持选择工作区。                                                                              |
|    <kbd>Ctrl+Shift+Alt+J</kbd> | Toggle Max/Normal Panel              | 切换最大化最小化面板。                                                                                      |
|     <kbd>Ctrl(Cmd)+Alt+I</kbd> | Insert Snippets                      | 插入当前语言代码片段。                                                                                      |
|   <kbd>Ctrl(Cmd)+Shift+I</kbd> | triggerParameterHints                | 触发代码提示                                                                                                |
|          <kbd>Ctrl+Win+=</kbd> | Maximize current Editor group        | 最大化当前编辑器组。                                                                                        |
|          <kbd>Ctrl+Win+-</kbd> | Restore current Editor group Size    | 恢复当前编辑器组的大小。                                                                                    |
|             <kbd>Alt+F11</kbd> | High Current Word                    | 高亮代码，需要你安装 [TextMarker](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)。 |
|                  <kbd>F1</kbd> | navigateBack                         | 返回, 等价<kbd>Alt +  ⬅</kbd>                                                                               |
|              <kbd>Alt+F1</kbd> | navigateForward                      | 前进, 等价<kbd>Alt +  ➡</kbd>                                                                               |
|             <kbd>Ctrl+F1</kbd> | goToImplementation                   | 转到实现或/定义, 等价<kbd>Ctrl+F12</kbd>                                                                    |
|            <kbd>Shift+F1</kbd> | goToReferences                       | 查找引用, 等价<kbd>Shift+F12</kbd>                                                                          |
|         <kbd>Ctrl+Alt+F5</kbd> | debug.selectandstart                 | 选择那个调试任务去运行 debug                                                                                |
|    <kbd>Ctrl+Alt+Shift+B</kbd> | tasks.runTask                        | 选择那个构建任务去 build                                                                                    |
|              <kbd>Ctrl+N</kbd> | new File When focus on file tree     | 当聚焦到文件管理器时。创建一个命名新文件（方式和鼠标点击一致，会直接命名并保存）                            |
|        <kbd>Ctrl+Shift+N</kbd> | new Folder When focus on file tree   | 当聚焦到文件管理器时。创建一个新文件夹（方式和鼠标点击一致）                                                |
|          <kbd>Ctrl+Alt+B</kbd> | Toggle side panel(request V1.62.0)   | 切换 新的侧边栏。需要VSCode 1.62.0 版本及以上                                                               |
|       <kbd>Shift+Alt+F11</kbd> | findImplementations                  | 查找所有实现。 类似查找所有引用(Shift+Alt+F12)                                                              |
| <kbd>Ctrl+Shift+G Ctrl+G</kbd> | open git graph(git log)              | 打开git graph（git log）视图                                                                                |

- 其他

## Requirements

- git installed
- vscode installed
- vscode.git enabled

## Extension Settings

None

## Future feature

- [x] 支持当前仓库直接推送
- [x] 支持选择指定仓库和分支进行推送
- [ ] 支持规范提交信息
  - [ ] 支持对话框选择提示
  - [ ] 支持提示是否直接提交还是不提交
- [ ] 支持添加 pushg 到 windows 的 alias
- [ ] 支持批量 hook 信息复制
- [ ] 支持账号配置

## Known Issues

None

## Recently ChangeLog

Change Readme
