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

  |   |             快捷键 |                                   |
  |---|-------------------:|-----------------------------------|
  | 1 |     `ctrl+shift+~` | 创建新的终端。支持选择工作区。      |
  | 2 | `ctrl+shift+alt+j` | 切换最大化最小化面板。             |
  | 3 |    `ctrl+shift+j ` | 切换和显示终端。                   |
  | 4 |       `ctrl+alt+j` | 插入当前代码块。                   |
  | 5 |       `ctrl+win+=` | 最大化当前编辑器组。               |
  | 6 |       `ctrl+win+-` | 恢复当前编辑器组的大小。           |
  | 7 |               `f1` | 返回。                             |
  | 8 |           `alt+f8` | 高亮代码，需要你安装 `textMarker`。 |

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
  - [ ] 支持串口提示
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
