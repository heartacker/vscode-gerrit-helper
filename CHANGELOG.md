# Change Log

All notable changes to the "GerritHelper" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

None

## [Released]

### [V1.0.0] 2021-11-13

#### New

- **Add keybinding for MAC OS** for those useful shortcuts.
- clean up code.
- i18n support(zh, en).
- show message when success.
- automatically focus the **git output** for push message.
- add <kbd>Ctrl+N</kbd> to creat new file when focus on file explorer tree.
- add <kbd>Ctrl+Shift+N</kbd> to creat new folder when focus on file explorer tree.
  - that is useful for you when you focus on file tree when using <kbd>Ctrl+Shift+E</kbd> explicitly.
- add <kbd>Ctrl+Alt+B</kbd> to toggle side panel.
- add <kbd>Shift+Alt+F11</kbd> to `references-view.findImplementations`.

#### Change

- change <kbd>Ctrl+Shift+I</kbd> to  <kbd>Ctrl+Alt+I</kbd> to insert snippet.
- set <kbd>Ctrl+Shift+I</kbd> to  `editor.action.triggerParameterHints`.

### [v0.0.13] 2021-10-28

- fix the <kbd>ctrl+alt+shift+b</kbd>
- delete `adam-bender.commit-message-editor`

### [v0.0.11] 2021-10-13

- change readme
- add two extensions within pack:
  - [mhutchie.git-graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
  - [adam-bender.commit-message-editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor)

### [v0.0.9] 2021-10-10

- Change <kbd>Ctrl+alt+b</kbd> to <kbd>Ctrl+Shift+alt+b</kbd> for `workbench.action.tasks.runTask`
- delete unuseful commands

### [v0.0.8] 2021-08-31

- Change <kbd>Ctrl+alt+i</kbd> to <kbd>Ctrl+Shift+i</kbd>/MacOS <kbd>Cmd+shift+i</kbd>for `insert snippet`

### [v0.0.7] 2021-08-27

- Remove all MacOS Shortcut
- Change toggle highlight(<font color=orange>TextMarker</font>) from <kbd>Alt+f8</kbd> to <kbd>Alt+f11</kbd>
- Add <kbd>Ctrl+Shift+g</kbd> + <kbd>Ctrl+Shift+g</kbd> for focus SCM viewer
- Modify README.md

### [V0.0.5] 2021-7-17

- 修复快捷键配置错误

### [V0.0.3] 2021-7-17

- 重新优化了大部分快捷键。
- 提高git 推送的稳定性等

### [V0.0.2]

- 删除`push`的命令，使用 `pushg` 提到，并自动选择。
  - 如果在scm/title 点击按钮，这直接推送当前分支。
  - 如果使用command palette，则支持选择仓库分支进行推送。
- 添加几个非常好用的快捷键支持，基本不会和其他插件冲突。
    1. `ctrl+shift+~` 创建新的终端。支持选择工作区。
    2. `ctrl+shift+alt+j` 切换最大化最小化面板。
    3. `ctrl+alt+i` 插入当前代码块。
    4. `ctrl+win+=` 最大化当前编辑器组。
    5. `ctrl+win+-` 恢复当前编辑器组的大小。
    7. `f1` 返回。
    8. `alt+f8` 高亮代码，需要你安装 `textMarker`。

### [V0.0.1]

- 完成 push 到gerrit的支持。
