const path = require('path')

// plugin setup
const { addViewPath } = require('../utils/view.helpers')

const registerPlugins = (app, pluginsConfig) => {
  pluginsConfig.forEach(plugin => {
    const name = plugin.name
    addViewPath(app, path.join(__dirname, `${name}/templates`))
  })
}

module.exports = {
  registerPlugins,
}
