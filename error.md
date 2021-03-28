记载踩坑Log
===

1、elementui-plus无法兼容vue3.0.5 需要手动限制vue版本  
在package.json中添加
  "dependencies": {
    "vue": "^3.0.3"
  }  

2、git push error 10054  
解决方法：  
在命令行中执行这个  
git config --global http.sslBackend "openssl"  
