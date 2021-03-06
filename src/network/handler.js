function Handler (fun) {
  const handler = fun
  this.onResponse = function (response) {
    if (handler) {
      if (response.data.code === 0) {
        handler(0, '', response.data.data)
      } else {
        handler(response.data.code, response.data.error, null)
      }
    }
  }

  this.onError = function (error) {
    if (handler) {
      const err = {
        summary: '未知错误',
        detail: error.message
      }
      handler(-1, err, null)
    }
  }
}

function create (handler) {
  return new Handler(handler)
}

export default {
  create
}
