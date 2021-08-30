# GerritHelper

GerritHelper, help push to gerrit for review inside VSCode, no need to use command line shell again.

## Features

help push to gerrit for review inside VSCode, no need to use command line shell again.

1. pushg branch to the gerrit, you can click the icon of the git repo title bar,
2. select specific **repo**、**branch** to push。
   1. you can also use shortcut key <kbd>ctrl+shift+g ctrl+p</kbd>。
3. [ ] better commit information for commit。
   1. [ ] you can alse use <kbd>alt+enter</kbd> when you're focusing the git commit box.
4. [ ] gerrit other helpful tool and commanders

## Extra Features

-  添加几个非常好用的快捷键支持，基本不会和其他插件冲突。


|                                         快捷键 | 描述                                                                                                        |
| ---------------------------------------------: | ----------------------------------------------------------------------------------------------------------- |
|                        <kbd>ctrl+shift+~</kbd> | 创建新的终端。支持选择工作区。                                                                              |
|                    <kbd>ctrl+shift+alt+j</kbd> | 切换最大化最小化面板。                                                                                      |
| <kbd>ctrl+shift+i</kbd> <kbd>cmd+shift+i</kbd> | 插入当前语言代码片段。                                                                                      |
|                          <kbd>ctrl+win+=</kbd> | 最大化当前编辑器组。                                                                                        |
|                          <kbd>ctrl+win+-</kbd> | 恢复当前编辑器组的大小。                                                                                    |
|                             <kbd>alt+f11</kbd> | 高亮代码，需要你安装 [TextMarker](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)。 |
|                                  <kbd>f1</kbd> | 返回, 等价<kbd>alt +  ⬅</kbd>                                                                               |
|                              <kbd>alt+F1</kbd> | 前进, 等价<kbd>alt +  ➡</kbd>                                                                               |
|                             <kbd>ctrl+F1</kbd> | 转到实现或/定义, 等价<kbd>ctrl+F12</kbd>                                                                    |
|                            <kbd>shift+F1</kbd> | 查找应用, 等价<kbd>shift+F12</kbd>                                                                          |
|                         <kbd>ctrl+alt+f5</kbd> | 选择那个调试任务去运行 debug                                                                                |
|                          <kbd>ctrl+alt+b</kbd> | 选择那个构建任务去 build                                                                                    |



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
- [ ] 支持规范信息模板配置

## Known Issues

None

## Recently ChangeLog

### [v0.0.8] 2021-08-31
- Change <kbd>Ctrl+alt+i</kbd> to <kbd>Ctrl+Shift+i</kbd>/MacOS <kbd>Cmd+shift+i</kbd>for `insert snippet`

### [v0.0.7] 2021-08-27
- Remove all MacOS Shortcut
- Change toggle highlight(<font color=orange>TextMarker</font>) from <kbd>Alt+f8</kbd> to <kbd>Alt+f11</kbd>
- Add <kbd>Ctrl+Shift+g</kbd> + <kbd>Ctrl+Shift+g</kbd> for focus SCM viewer
- Modify README.md

