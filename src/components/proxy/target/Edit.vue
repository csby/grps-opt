<template>
  <el-dialog :visible.sync="visible"
             :title="title"
             width="500px"
             :append-to-body="true"
             :close-on-click-modal="false"
             @closed="handleInput(false)">
    <table class="table">
      <tr>
        <td>域名:</td>
        <td>
          <el-input v-model="editInfo.target.domain" type="text" size="mini"/>
        </td>
      </tr>
      <tr>
        <td class="required">目标地址:</td>
        <td>
          <el-input v-model="editInfo.target.ip"  type="text" size="mini"/>
        </td>
      </tr>
      <tr>
        <td class="required">目标端口:</td>
        <td>
          <el-input v-model="editInfo.target.port"  type="text" size="mini"/>
        </td>
      </tr>
      <tr>
        <td>版本:</td>
        <td>
          <el-select class="item-content" size="mini" v-model="editInfo.target.version">
            <el-option :value="0" label="0 - 默认"/>
            <el-option :value="1" label="1 - 在TCP中添加PROXY头部"/>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>已禁用:</td>
        <td>
          <el-checkbox v-model="editInfo.target.disable" style="padding: 5px 0px" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <error-message :summary="errSummary" :detail="errDetail" :holder="false"/>
        </td>
      </tr>
    </table>

    <span slot="footer">
        <el-button size="small" @click="visible = false">关 闭</el-button>
        <el-button size="small" type="primary" :loading="saving" :disabled="saving" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Component from 'vue-class-component'
import VueBase from '@/components/VueBase'
import ErrorMessage from '@/components/Error'

@Component({
  components: {
    errorMessage: ErrorMessage
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '修改目标地址'
    },
    uri: {
      type: String,
      default: ''
    },
    serverId: {
      type: String,
      default: ''
    },
    info: {
      type: Object
    }
  },
  watch: {
    value: {
      handler: 'onVisibleChanged'
    }
  }
})
class Edit extends VueBase {
  errSummary = ''
  errDetail = ''
  visible = false
  saving = false

  editInfo = {
    serverId: '',
    target: {
      id: '',
      domain: '',
      ip: '',
      port: '',
      version: 0,
      disable: false
    }
  }

  onSave (code, err, data) {
    this.saving = false
    if (code === 0) {
      this.visible = false
    } else {
      this.errSummary = err.summary
      this.errDetail = err.detail
    }
  }

  save () {
    this.errSummary = ''
    this.errDetail = ''
    this.saving = true
    const uri = this.uri
    this.post(uri, this.editInfo, this.onSave)
  }

  handleInput (value) {
    this.$emit('input', value)
  }

  onVisibleChanged (val) {
    this.visible = val
    if (val) {
      this.saving = false
      this.editInfo.serverId = this.serverId
      if (this.info) {
        this.editInfo.target.id = this.info.id
        this.editInfo.target.domain = this.info.domain
        this.editInfo.target.ip = this.info.ip
        this.editInfo.target.port = this.info.port
        this.editInfo.target.version = this.info.version
        this.editInfo.target.disable = this.info.disable
      }
    } else {
      this.errSummary = ''
      this.errDetail = ''
    }
  }
}

export default Edit
</script>

<style scoped>
.table {
  padding: 0px;
  width: 100%;
}

.table tr td:first-child {
  text-align: right;
  padding-right: 5px;
  width: 75px;
}

.required {
  color: #f00000;
}
</style>
