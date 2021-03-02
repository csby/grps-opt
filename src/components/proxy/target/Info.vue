<template>
  <el-table class="content" size="small" width="100%" :stripe="true" :data="targets" >
    <el-table-column prop="domain" label="域名" align="right" min-width="150px"/>
    <el-table-column prop="ip" label="目标地址" width="120"/>
    <el-table-column prop="port" label="目标端口" width="80"/>
    <el-table-column prop="version" label="版本" width="55"/>
    <el-table-column label="已禁用" width="60">
      <template slot-scope="scope">
        <el-checkbox v-model="scope.row.disable" :disabled="true"/>
      </template>
    </el-table-column>
    <el-table-column label="" width="110" align="left">
      <template slot="header">
        <el-button style="padding: 6px 4px;" icon="el-icon-circle-plus-outline" size="mini" type="primary" @click="addItem()">
          <span >添加目标地址</span>
        </el-button>
      </template>
      <div class="btn" slot-scope="scope">
        <el-button size="mini" @click="modifyItem(scope.row)">修 改</el-button>
        <el-popconfirm @confirm="deleteItem(scope.row)"
                       :title="'确定要删除该目标地址[' + scope.row.domain + ' => ' + scope.row.ip + ':' + scope.row.port + ']吗？'">
          <el-button slot="reference" class="btn" style="margin-left: 8px; margin-right: 0px;" size="mini" type="danger">删 除</el-button>
        </el-popconfirm>
      </div>
    </el-table-column>

    <targetEditDlg v-model="dialogsVisible.targetEdit"
                   :server-id="serverId"
                   :info="editInfo"
                   :uri="this.$uris.proxyTargetMod"/>
    <targetEditDlg v-model="dialogsVisible.targetAdd"
                   :server-id="serverId"
                   :uri="this.$uris.proxyTargetAdd"
                   title="添加目标地址"/>
  </el-table>
</template>

<script>
import Component from 'vue-class-component'
import SocketBase from '@/components/SocketBase'
import TargetEditDlg from '@/components/proxy/target/Edit'

@Component({
  components: {
    targetEditDlg: TargetEditDlg
  },
  props: {
    serverId: {
      type: String,
      default: ''
    }
  }
})
class Info extends SocketBase {
  targets = []

  editInfo = {
    id: '',
    domain: '',
    ip: '',
    port: '',
    version: 0,
    disable: false
  }

  dialogsVisible = {
    targetEdit: false,
    targetAdd: false
  }

  fireTargetCountChanged () {
    this.$emit('targetCountChanged', this.targets.length)
  }

  addItem () {
    this.dialogsVisible.targetAdd = true
  }

  modifyItem (data) {
    this.editInfo = data
    this.dialogsVisible.targetEdit = true
  }

  onDeleteTargets (code, err, data) {
    if (code === 0) {
    } else {
      this.error(err)
    }
  }

  deleteItem (data) {
    const argument = {
      serverId: this.serverId,
      targetId: data.id
    }

    this.post(this.$uris.proxyTargetDel, argument, this.onDeleteTargets)
  }

  onGetTargets (code, err, data) {
    if (code === 0) {
      this.targets = data
    } else {
      this.targets = []
    }

    this.fireTargetCountChanged()
  }

  getTargets () {
    const argument = {
      id: this.serverId
    }
    this.post(this.$uris.proxyTargetList, argument, this.onGetTargets)
  }

  onSocketMessage (id, data) {
    if (id === this.$evt.id.wsReviseProxyTargetMod) {
      if (data && this.targets) {
        if (data.serverId === this.serverId && data.target) {
          const count = this.targets.length
          for (let index = 0; index < count; index++) {
            if (data.target.id === this.targets[index].id) {
              this.targets[index].domain = data.target.domain
              this.targets[index].ip = data.target.ip
              this.targets[index].port = data.target.port
              this.targets[index].version = data.target.version
              this.targets[index].disable = data.target.disable
            }
          }
        }
      }
    } else if (id === this.$evt.id.wsReviseProxyTargetAdd) {
      if (data && this.targets) {
        if (data.serverId === this.serverId && data.target) {
          this.targets.push(data.target)
          this.fireTargetCountChanged()
        }
      }
    } else if (id === this.$evt.id.wsReviseProxyTargetDel) {
      if (data && this.targets) {
        if (data.serverId === this.serverId) {
          const count = this.targets.length
          for (let index = 0; index < count; index++) {
            if (data.targetId === this.targets[index].id) {
              this.targets.splice(index, 1)
              this.fireTargetCountChanged()
            }
          }
        }
      }
    }
  }

  mounted () {
    this.getTargets()
  }
}

export default Info
</script>

<style scoped>
.content {
  border-top: 1px solid #ebeef5;
}

.btn {
  display: flex;
  align-items: center;
}
.btn .el-button {
  padding: 4px 8px 4px 8px;
  margin: 0px;
}
.btn .el-button:not(:first-child) {
  margin-left: 5px;
}
</style>
