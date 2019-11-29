const { getSessionData } = require('./session.helpers')
const { getFlashMessage } = require('./flash.message.helpers')
const { getClientJs } = require('./load.helpers')

const getViewData = (req, optionalParams = {}) => {
  const js = getClientJs(req, "inlineFeedback")

  const params = {
    data: { ...getSessionData(req) },
    pluginJsFiles: js ? [js] : false,
  }

  const errors = getFlashMessage(req)

  if (errors) {
    params.errors = errors
  }

  return { ...params, ...optionalParams }
}

module.exports = {
  getViewData,
}
