# GerritHelper

GerritHelper, help push to gerrit for review inside VSCode, no need to use command line shell again.

## Features

help push to gerrit for review inside VSCode, no need to use command line shell again.

1. pushg branch to the gerrit, you can click the icon of the git repo title bar,
2. select specific **repo**、**branch** to push, you can also use shortcut key <kbd>ctrl+shift+g ctrl+p</kbd>。

## Extra Features

-  添加几个非常好用的快捷键支持，基本不会和其他插件冲突。


|                               快捷键/Short Cut | Description                          | 描述                                                                                                        |
| ---------------------------------------------: | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|                        <kbd>ctrl+shift+~</kbd> | Creat Terminal With root and profile | 创建新的终端。支持选择工作区。                                                                              |
|                    <kbd>ctrl+shift+alt+j</kbd> | Toggle Max/Normal Panel              | 切换最大化最小化面板。                                                                                      |
| <kbd>ctrl+shift+i</kbd> <kbd>cmd+shift+i</kbd> | Insert Snippets                      | 插入当前语言代码片段。                                                                                      |
|                          <kbd>ctrl+win+=</kbd> | Maximize current Editor group        | 最大化当前编辑器组。                                                                                        |
|                          <kbd>ctrl+win+-</kbd> | Restore current Editor group Size    | 恢复当前编辑器组的大小。                                                                                    |
|                             <kbd>alt+f11</kbd> | High Current Word                    | 高亮代码，需要你安装 [TextMarker](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)。 |
|                                  <kbd>f1</kbd> | navigateBack                         | 返回, 等价<kbd>alt +  ⬅</kbd>                                                                               |
|                              <kbd>alt+F1</kbd> | navigateForward                      | 前进, 等价<kbd>alt +  ➡</kbd>                                                                               |
|                             <kbd>ctrl+F1</kbd> | goToImplementation                   | 转到实现或/定义, 等价<kbd>ctrl+F12</kbd>                                                                    |
|                            <kbd>shift+F1</kbd> | goToReferences                       | 查找引用, 等价<kbd>shift+F12</kbd>                                                                          |
|                         <kbd>ctrl+alt+f5</kbd> | debug.selectandstart                 | 选择那个调试任务去运行 debug                                                                                |
|                    <kbd>ctrl+alt+shift+b</kbd> | tasks.runTask                        | 选择那个构建任务去 build                                                                                    |


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
