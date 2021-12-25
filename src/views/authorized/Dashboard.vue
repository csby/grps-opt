<template>
  <el-container>
    <el-main style="padding: 0px 10px 0px 0px;">
      <proxyService />
      <proxyConnection class="not-first" />
    </el-main>
    <el-aside width="420px">
      <div>
        <svcInfo />
      </div>
      <div class="not-first">
        <monitorNetworkListening />
      </div>
      <div class="not-first">
        <monitorNetworkInterfaces />
      </div>
      <div class="not-first">
        <updInfo />
      </div>
      <div class="not-first">
        <siteApps />
      </div>
      <div class="not-first">
        <monitorHost />
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import Component from 'vue-class-component'
import VueBase from '@/components/VueBase'
import SvcInfo from '@/components/svc/opt/Info'
import UpdInfo from '@/components/svc/upd/Info'
import MonitorHost from '@/components/monitor/host/Host'
import MonitorNetworkInterfaces from '@/components/monitor/network/Interface'
import MonitorNetworkListening from '@/components/monitor/network/Listening'
import SiteRoot from '@/components/site/root/Info'
import SiteApps from '@/components/site/app/Apps'
import ProxyService from '@/components/proxy/Service'
import ProxyConnection from '@/components/proxy/Connection'

@Component({
  components: {
    svcInfo: SvcInfo,
    updInfo: UpdInfo,
    monitorHost: MonitorHost,
    monitorNetworkInterfaces: MonitorNetworkInterfaces,
    monitorNetworkListening: MonitorNetworkListening,
    siteRoot: SiteRoot,
    siteApps: SiteApps,
    proxyService: ProxyService,
    proxyConnection: ProxyConnection
  }
})
class Dashboard extends VueBase {

}

export default Dashboard
</script>

<style scoped>
.not-first {
  margin-top: 5px;
}
</style>
