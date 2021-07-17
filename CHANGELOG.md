# Change Log

All notable changes to the "GerritHelper" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [V0.0.3](2021-7-17)

- 重新优化了大部分快捷键。
- 提高git 推送的稳定性等

## [V0.0.2]
- 删除`push`的命令，使用 `pushg` 提到，并自动选择。
  - 如果在scm/title 点击按钮，这直接推送当前分支。
  - 如果使用command palette，则支持选择仓库分支进行推送。
-  添加几个非常好用的快捷键支持，基本不会和其他插件冲突。
    1. `ctrl+shift+~` 创建新的终端。支持选择工作区。
    2. `ctrl+shift+alt+j` 切换最大化最小化面板。
    3. `ctrl+alt+i` 插入当前代码块。
    4. `ctrl+win+=` 最大化当前编辑器组。
    5. `ctrl+win+-` 恢复当前编辑器组的大小。
    7. `f1` 返回。
    8. `alt+f8` 高亮代码，需要你安装 `textMarker`。

## [V0.0.1]
- 完成 push 到gerrit的支持。


## [Unreleased]

- Initial release