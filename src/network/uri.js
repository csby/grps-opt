const uri = {
  // 获取获取验证码
  getCaptcha: '/opt.api/captcha',
  // 用户登录
  login: '/opt.api/login',
  // 退出登录
  logout: '/opt.api/logout',
  // 获取登录账号
  getLoginAccount: '/opt.api/login/account',
  // 获取在线用户
  getOnlineUsers: '/opt.api/online/users',

  // 通知订阅
  websocketNotify: '/opt.api/websocket/notify',

  // 后台服务
  // 获取服务信息
  svcInfo: '/opt.api/service/info',
  // 是否可在线重启
  svcRestartEnable: '/opt.api/service/restart/enable',
  // 重启服务
  svcRestart: '/opt.api/service/restart',
  // 是否可在线更新
  svcUpdateEnable: '/opt.api/service/update/enable',
  // 更新服务
  svcUpdate: '/opt.api/service/update',

  // 更新管理
  // 是否支持
  updEnable: '/opt.api/update/enable',
  // 获取服务信息
  updInfo: '/opt.api/update/info',
  // 是否可在线重启
  updRestartEnable: '/opt.api/update/restart/enable',
  // 重启服务
  updRestart: '/opt.api/update/restart',
  // 是否可在线更新
  updUploadEnable: '/opt.api/update/upload/enable',
  // 更新服务
  updUpload: '/opt.api/update/upload',

  // 系统信息
  // 获取主机信息
  monitorHost: '/opt.api/monitor/host',
  // 获取网卡信息
  monitorNetworkInterfaces: '/opt.api/monitor/network/interfaces',
  // 获取监听端口
  monitorListenPorts: '/opt.api/monitor/network/listen/ports',

  // 网站管理
  // 根站点
  // 获取文件列表
  siteRootFileList: '/opt.api/site/root/file/list',
  // 上传文件
  siteRootFileUpload: '/opt.api/site/root/file/upload',
  // 删除文件
  siteRootFileDelete: '/opt.api/site/root/file/delete',
  // 应用站点
  // 获取网站列表(ID)
  siteWebAppList: '/opt.api/site/app/list',
  // 获取网站信息
  siteWebAppInfo: '/opt.api/site/app/info',
  // 上传网站
  siteWebAppUpload: '/opt.api/site/app/upload',

  // 反向代理
  // 获取服务设置
  proxyServiceSettingGet: '/opt.api/proxy/service/setting/get',
  // 修改服务设置
  proxyServiceSettingSet: '/opt.api/proxy/service/setting/set',
  // 获取服务状态
  proxyServiceStatus: '/opt.api/proxy/service/status',
  // 启动服务
  proxyServiceStart: '/opt.api/proxy/service/start',
  // 停止服务
  proxyServiceStop: '/opt.api/proxy/service/stop',
  // 重启服务
  proxyServiceRestart: '/opt.api/proxy/service/restart',
  // 获取连接列表
  proxyConnList: '/opt.api/proxy/conn/list',
  // 获取服务器列表
  proxyServerList: '/opt.api/proxy/server/list',
  // 添加服务器
  proxyServerAdd: '/opt.api/proxy/server/add',
  // 删除服务器
  proxyServerDel: '/opt.api/proxy/server/del',
  // 修改服务器
  proxyServerMod: '/opt.api/proxy/server/mod',
  // 获取目标地址列表
  proxyTargetList: '/opt.api/proxy/target/list',
  // 添加目标地址
  proxyTargetAdd: '/opt.api/proxy/target/add',
  // 删除目标地址
  proxyTargetDel: '/opt.api/proxy/target/del',
  // 修改目标地址
  proxyTargetMod: '/opt.api/proxy/target/mod'
}

export default {
  uris: uri
}
