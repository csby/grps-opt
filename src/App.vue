<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  .el-table .error-row {
    background: #FEF0F0;
    color: #F56C6C;
  }
  .el-table .warning-row {
    background: #FEF0F0;
    color: #E6A23C;
  }
  .el-table .info-row {
    background: #F4F4F5;
    color: #909399;
  }
  .el-table .success-row {
    background: #F0F9EB;
    color: #67C23A;
  }
  .el-table .progress-row {
    background: #FFFFFF;
    color: #419FFF;
  }
</style>
