const path = require('path')

// add your plugin here
const plugins = [{ name: 'feedback' }]

// plugin setup
const { addViewPath } = require('../utils/view.helpers')
const registerPlugins = (app, pluginsConfig = plugins) => {
  pluginsConfig.forEach(plugin => {
    const name = plugin.name
    addViewPath(app, path.join(__dirname, `${name}/templates`))
  })
}

module.exports = {
  registerPlugins,
}
