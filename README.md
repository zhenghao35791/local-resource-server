# local-resource-server
```
静态资源服务器
```
## Build Setup
npm i -g local-resource-server
## 使用方法
``` bash
local-resource-server #当前文件夹作为静态服务器根目录

local-resource-server -p 8080 #设置端口号为8080

local-resource-server -h localhost #设置 host 为localhost

local-resource-server -d /usr #设置根目录为usr

local-resource-server -cache #设置缓存
```
##启动方式
```
node src/index.js -p 9999 -h localhost
```
