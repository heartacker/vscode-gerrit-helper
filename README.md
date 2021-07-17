# GerritHelper

GerritHelper

## Features

help push to gerrit for review inside VSCode, no need to use command line shell again.

1. pushg branch to the gerrit, you can click the icon of the git repo title bar,
2. select specific **repo**、**branch** to push。
   1. you can also use shortcut key `ctrl+shift+g p`。
3. better commit information for commit。
   1. you can alse use `ctrl+shift+enter` when you're focusing the git commit box.
4. gerrit other helpful tool and commanders

## Extra Features

-  添加几个非常好用的快捷键支持，基本不会和其他插件冲突。  

  |    |             快捷键 |                                                                                                           |
  |----|-------------------:|-----------------------------------------------------------------------------------------------------------|
  | 0  |     `ctrl+shift+~` | 创建新的终端。支持选择工作区。                                                                              |
  | 1  | `ctrl+shift+alt+j` | 切换最大化最小化面板。                                                                                     |
  | 2  |       `ctrl+alt+i` | 插入当前代码块。                                                                                           |
  | 3  |       `ctrl+win+=` | 最大化当前编辑器组。                                                                                       |
  | 4  |       `ctrl+win+-` | 恢复当前编辑器组的大小。                                                                                   |
  | 5  |           `alt+f8` | 高亮代码，需要你安装 [textMarker](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)。 |
  | 6  |               `f1` | 返回, 等价`alt +  ⬅`                                                                                      |
  | 7  |           `alt+F1` | 前进, 等价`alt +  ➡`                                                                                      |
  | 8  |          `ctrl+F1` | 转到实现或/定义, 等价`ctrl+F12`                                                                           |
  | 9  |         `shift+F1` | 查找应用, 等价`shift+F12`                                                                                 |
  | 10 |      `ctrl+alt+f5` | 选择那个调试任务去运行debug                                                                               |
  | 11 |       `ctrl+alt+b` | 选择那个构建任务去build                                                                                   |



- 其他


## Requirements

- git installed
- vscode installed
- vscode.git enabled

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

## Future feature
- [x] 支持当前仓库直接推送
- [x] 支持选择指定仓库和分支进行推送
- [ ] 支持规范提交信息
  - [ ] 支持对话框选择提示
- [ ] 支持添加pushg 到windows的alias
- [ ] 支持批量 hook 信息复制
- [ ] 支持账号配置
- [ ] 支持规范信息模板配置
 
## Known Issues

None
## Release Notes

### 1.0.0

Initial release of ...
**Enjoy!**
