const path = require('path')

// add your plugin here
const plugins = [{ name: 'feedback' }]

// plugin setup
const { addViewPath } = require('../utils/view.helpers')
var jsFilenames = []
const registerPlugins = (app, pluginsConfig = plugins) => {
  pluginsConfig.forEach(plugin => {
    const name = plugin.name
    addViewPath(app, path.join(__dirname, `${name}/templates`))
    jsFilenames.push({
      name: name,
      path: path.join(__dirname, `${name}/js/index`),
    })
  })
}

module.exports = {
  registerPlugins,
}
