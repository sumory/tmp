webpackJsonp([9],{765:function(n,e){n.exports={content:["article",["h2","\u547d\u4ee4\u884c\u5de5\u5177lord"],["p","lor\u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177",["code","lord"],"\u6765\u6784\u5efa\u57fa\u4e8elor\u7684\u9879\u76ee\u9aa8\u67b6\uff0c\u6b64\u540e\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u884c\u8c03\u6574\u76ee\u5f55\u7ed3\u6784\u548c\u4ee3\u7801."],["p","\u5728\u5b89\u88c5",["code","lor"],"\u4e4b\u540e, \u5728\u7ec8\u7aef\u8f93\u5165",["code","lord -h"],"\u5373\u53ef\u67e5\u770b\u6709\u54ea\u4e9b\u547d\u4ee4\u53ef\u4ee5\u4f7f\u7528:"],["pre",{lang:"bash",highlighted:'$ lord -h\nlor v0.3.0, a Lua web framework based on OpenResty.\n\nUsage: lord COMMAND <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>\n\nCommands:\n new <span class="token punctuation">[</span>name<span class="token punctuation">]</span>             Create a new application\n start                  Start the server\n stop                   Stop the server\n restart                Restart the server\n version                Show version of lor\n <span class="token function">help</span>                   Show <span class="token function">help</span> tips\n path                   Show <span class="token function">install</span> path'},["code","$ lord -h\nlor v0.3.0, a Lua web framework based on OpenResty.\n\nUsage: lord COMMAND [OPTIONS]\n\nCommands:\n new [name]             Create a new application\n start                  Start the server\n stop                   Stop the server\n restart                Restart the server\n version                Show version of lor\n help                   Show help tips\n path                   Show install path"]],["h2","\u521b\u5efa\u9879\u76ee"],["p",["code","lord new"],"\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u9aa8\u67b6:"],["pre",{lang:"bash",highlighted:"lord new lor_demo"},["code","lord new lor_demo"]],["p","\u8fdb\u5165lor_demo\u67e5\u770b\uff0c\u4e00\u4e2alor\u9879\u76ee\u5c31\u88ab\u521b\u5efa\u597d\u4e86\uff0c\u5b83\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"],["pre",{lang:"bash",highlighted:'$ tree <span class="token keyword">.</span>\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 main.lua\n\u2502   \u251c\u2500\u2500 middleware\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2514\u2500\u2500 inject_app_info.lua\n\u2502   \u251c\u2500\u2500 router.lua\n\u2502   \u251c\u2500\u2500 routes\n\u2502   \u2502   \u2514\u2500\u2500 user.lua\n\u2502   \u251c\u2500\u2500 server.lua\n\u2502   \u251c\u2500\u2500 static\n\u2502   \u2502   \u2514\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 views\n\u2502       \u251c\u2500\u2500 index.html\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u2514\u2500\u2500 info.html\n\u251c\u2500\u2500 conf\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 mime.types\n\u2502   \u2514\u2500\u2500 nginx-dev.conf\n\u251c\u2500\u2500 reload.sh\n\u251c\u2500\u2500 start.sh\n\u2514\u2500\u2500 stop.sh'},["code","$ tree .\n\u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 middleware\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 inject_app_info.lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 router.lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 server.lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 static\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 views\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0     \u2514\u2500\u2500 user\n\u2502\xa0\xa0         \u2514\u2500\u2500 info.html\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 mime.types\n\u2502\xa0\xa0 \u2514\u2500\u2500 nginx-dev.conf\n\u251c\u2500\u2500 reload.sh\n\u251c\u2500\u2500 start.sh\n\u2514\u2500\u2500 stop.sh"]],["p",{class:"tip"},"\u751f\u6210\u7684\u793a\u4f8b\u9879\u76ee\u4e2d\u5305\u542b\u4e86\u7edd\u5927\u90e8\u5206API\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\n\u8bf7\u5148\u9605\u8bfb\u4ee5\u4e0a\u793a\u4f8b\u7684\u4ee3\u7801\uff0c \u5728\u5bf9`lor`\u6846\u67b6\u719f\u6089\u4e4b\u524d\uff0c\u8bf7\u4e0d\u8981\u968f\u610f\u5220\u9664\u6587\u4ef6\u6216\u8005\u4fee\u6539\u4ee3\u7801\u4f4d\u7f6e\uff0c\u4ee5\u514d\u793a\u4f8b\u65e0\u6cd5\u8fd0\u884c\u3002\n\u4e00\u65e6\u719f\u6089\u4e86\u5982\u4f55\u4f7f\u7528lor\u7684\u8def\u7531\u548c\u63d2\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4efb\u610f\u8c03\u6574\u76ee\u5f55\u7ed3\u6784\u548c\u6a21\u5757\u5f15\u7528\u65b9\u5f0f\uff0clor\u5bf9\u6b64\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u9650\u5236\u3002\n"],["h2","\u542f\u52a8\u9879\u76ee"],["p","\u8fdb\u5165\u521a\u624d\u521b\u5efa\u7684\u9879\u76ee\u76ee\u5f55lor_demo, \u7136\u540e\u6267\u884c",["code","lord start"],"(\u6216\u8005\u6267\u884csh start.sh)\u6765\u542f\u52a8\u9879\u76ee:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> lor_demo\n$ lord start'},["code","$ cd lor_demo\n$ lord start"]],["p","\u73b0\u5728\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee",["a",{title:null,href:"http://localhost:8888"},"http://localhost:8888"],"\u6765\u67e5\u770b\u4f60\u7684\u7b2c\u4e00\u4e2alor\u9879\u76ee\u5427."]],meta:{title:"Hello World",type:"\u57fa\u7840",order:3,filename:"docs/lord_usage.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u547d\u4ee4\u884c\u5de5\u5177lord",title:"\u547d\u4ee4\u884c\u5de5\u5177lord"},"\u547d\u4ee4\u884c\u5de5\u5177lord"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efa\u9879\u76ee",title:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8\u9879\u76ee",title:"\u542f\u52a8\u9879\u76ee"},"\u542f\u52a8\u9879\u76ee"]]]}}});