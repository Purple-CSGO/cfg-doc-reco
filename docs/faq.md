# 常见问题

## 为什么我自己的cfg无法自动加载？

- 需要在这个cfg的结尾加上 `host_writeconfig;`

- 启动项 `+exec xxx.cfg` 是不是忘了 `+` 或者忘了用空格隔开？
  
  > `xxx` : CFG名称

## 为什么控制台经常弹出unknown command？

- 记事本编辑文件后编码格式会变为 UTF8 Bom，而 csgo 无法识别 bom

- **对功能没影响** 可以用 editplus 或 vscode 改变编码为 UTF8

- CFG文件第一行使用注释 `//` 规避第一行可能出现的问题