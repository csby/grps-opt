const ids = {
  // 用户登陆
  // data: {userAccount: "", userName: "", loginIp: "", loginTime: "2019-07-12 20:29:31"}
  wsOptUserLogin: 101,
  // 用户注销
  // data: null
  wsOptUserLogout: 102,

  // 上传并发布后台服务管理网站
  // data: {"id":"96d2197b51f14870b00a01f08b67ae63","name":"测试网站","url":"http://192.168.123.201:8085/apps/test/","root":"/home/dev/projects/go/tmp/site/apps/test","guid":"","version":"","deployTime":"2021-02-12 13:09:25"}
  wsSiteUpload: 110,
  // 根站点-上传文件
  // data: {"url":"http://192.168.123.201:8085/test.txt","name":"test.txt","uploadTime":"2021-02-22 14:10:20"}
  wsRootSiteUploadFile: 111,
  // 根站点-删除文件
  // data: {"name":"test.txt"}
  wsRootSiteDeleteFile: 112,

  // 反向代理服务状态信息
  // data: {"status":1,"startTime":null,"error":""}
  wsReviseProxyServiceStatus: 1001,
  // 反向代理连接已打开
  // data:
  wsReviseProxyConnectionOpen: 1002,
  // 反向代理连接已关闭
  // data:
  wsReviseProxyConnectionShut: 1003,
  // 反向代理添加服务器
  // data: {"id":"6619850aec7340788f43eb6075d9dc91","name":"http","disable":false,"tls":false,"ip":"","port":"80"}
  wsReviseProxyServerAdd: 1011,
  // 反向代理删除服务器
  // data: {"id":"b0962e13f8734cd9b844556ffd7706ac"}
  wsReviseProxyServerDel: 1012,
  // 反向代理修改服务器
  // data: {"id":"6619850aec7340788f43eb6075d9dc91","name":"http","disable":true,"tls":true,"ip":"","port":"80"}
  wsReviseProxyServerMod: 1013,
  // 反向代理添加目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","target":{"id":"f7bc87bb3c3d4c0baa1f77028b8a2924","domain":"tt","ip":"22","port":"24","version":0,"disable":false}}
  wsReviseProxyTargetAdd: 1021,
  // 反向代理删除目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","targetId":"f7bc87bb3c3d4c0baa1f77028b8a2924"}
  wsReviseProxyTargetDel: 1022,
  // 反向代理修改目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","target":{"id":"76cacef32eac4ebe9d8aa575b28f409b","domain":"test.com","ip":"172.16.99.70","port":"443","version":1,"disable":false}}
  wsReviseProxyTargetMod: 1023
}

export default {
  ids
}
