# 使用说明

Purp1e(@[Purple-CSGO](https://space.bilibili.com/73115492))制作

控制台指令： <https://tools.dathost.net/csgo-commands>

HLAE Studio： <https://github.com/One-Studio/HLAE-Studio>

CSGO工具箱： <https://github.com/Purple-CSGO/CSGO-Toolbox-Qt>

----

请修改记事本字体为Consolas之类的等宽字体以获得更好体验

> 也可以前往[编辑器](/docs/editor.html)页面配置VSCode

![](/请修改记事本字体为Consolas之类的等宽字体.png)

## 文件作用

### 游戏设置核心

| 文件名                 | 功能    | 说明                  |
| ------------------- | ----- | ------------------- |
| auto.cfg            | 核心设置  | 常用游戏设置和跳投、投掷物准星等功能  |
| bind_default.cfg    | 默认键位  | 还原默认键位，确保每次启动游戏键位一致 |
| crosshair.cfg       | 准星参数  | 核心准星设置，投掷物准星切换功能所需  |
| crosshair_throw.cfg | 道具准星  | 投掷物准星功能所需           |
| 启动项.txt             | 启动项预设 | 方便复制启动项             |

### 使用场景快捷设置

| 文件名             | 功能     | 说明                      |
| --------------- | ------ | ----------------------- |
| practice.cfg    | 跑图练习   | 本地跑图的的预设指令和快捷键          |
| solo.cfg        | SOLO对抗 | 适用SOLO、2v2等场景，包含模式切换快捷键 |
| demo.cfg        | 录像观看   | 观看DEMO的设置和快捷键           |
| practiceExt.nut | 本地跑图脚本 | 跑图cfg保存、读取点位所需          |

> `practiceExt.nut` 文件要放在csgo安装位置的 `\csgo\scripts\vscripts` 下

### HLAE集锦制作

| 文件名            | 作用         | 说明                     |
| -------------- | ---------- | ---------------------- |
| hlae.cfg       | HLAE核心设置   | HLAE的设置和快捷键 一键高亮玩家击杀信息 |
| ffmpeg.cfg     | FFmpeg录制预设 | FFmpeg录制预设，改变通道录制方式    |
| blocksound.cfg | 屏蔽声音       | 屏蔽除语音外的所有声音，用以录制解说音轨   |
| cals.cfg       | 自拍杆        | 自拍杆效果和若干预设             |
| stream.cfg     | 分层录制核心     | 分层录制/多通道录制的指令和快捷键      |

> `bind_default.cfg` 在集锦制作时也会用到

## 使用步骤

1. **备份设置文件！备份设置文件！备份设置文件！**
   
   - 个人设置文件夹 `...\Steam\userdata\(32位ID)\730\local\cfg\`
   
   - 游戏设置文件夹 `...\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg\`
   
   > 32位->二进制位，大多8~10位十进制数字

2. ID不知道怎么办？
   
   - 打开 Steam 的 `添加好友` 页面，**ID=好友代码**
   
   - 登录 <https://steamid.io/>
     
     - 复制个人资料简介，如 `https://steamcommunity.com/id/1234567890/`
     
     - 第二行，如 SteamID3 [U:1:`146859713`] ，ID=`146859713`

3. //是"注释" 在它出现的那一行，之后的内容都不会被读取
   
   ```
   这是指令;    //这是注释
   ```
   
   如果不想用某条指令，就在指令前加上注释，或者直接删除:
   
   ```
   //这是指令;    //这是注释
   ```

4. 修改 `auto.cfg` 中的参数
   
   - 可以把游戏设置成**窗口模式**对应着改
   
   - **准星、持枪参数**可到创意工坊地图导出
   
   - 或使用下文的方法

5. 修改完成后移动到CFG文件夹（步骤1），个人CFG文件夹仅该玩家使用，方便打包；游戏CFG所有本机账号共享，请自行取舍。

## 准星&持枪参数导出

分开使用，复制到控制台，即可得到对应参数。

```
echo ;echo "==================== 准星参数 ====================";echo ;sv_max_allowed_developer 2;developer 2;
con_filter_enable 1;con_filter_text cl_crosshair;host_writeconfig;
con_filter_text cl_fix;host_writeconfig;developer 0;con_filter_enable 0;
```

```
echo ;echo "==================== 持枪参数 ====================";echo ;sv_max_allowed_developer 2;developer 2;
con_filter_enable 1;con_filter_text viewmodel;host_writeconfig;
con_filter_text cl_bob;host_writeconfig;developer 0;con_filter_enable 0;
```

## 准星分享代码

控制台使用分享代码示例：

```
apply_crosshair_code CSGO-cS6Fv-iBc8r-sroTA-4jyik-OYTSH
```

![准星代码](/准星代码.png)

## 启动项

| 启动项                                              | 含义                     |
| ------------------------------------------------ | ---------------------- |
| -novid                                           | 关闭过场动画                 |
| -nojoy                                           | 关闭摇杆                   |
| +exec auto.cfg                                   | 加载 `auto.cfg` 根据文件名调整  |
| -perfectworld                                    | 启动国服                   |
| -worldwide                                       | 启动国际服                  |
| -high                                            | 高优先级                   |
| -fullscreen                                      | 全屏                     |
| -windowed                                        | 窗口化                    |
| -noborder                                        | 窗口无边框                  |
| -refresh 240                                     | 刷新率 `240hz` 根据显示器调整    |
| -w 1920 -h 1080                                  | 分辨率 `1920x1080` 根据偏好调整 |
| -tickrate 128 +cl_cmdrate 128 +cl_updaterate 128 | 128tick                |

> CFG内容的最后有 `host_writeconfig` 才能在启动时写入设置
