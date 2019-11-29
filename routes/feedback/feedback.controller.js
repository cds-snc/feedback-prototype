const { routeUtils, getClientJs } = require('./../../utils')

module.exports = (app, route) => {

  route.draw(app)
    .get((req, res) => {
      const js = getClientJs(req, "inlineFeedback")

      res.render("feedback-plugin", routeUtils.getViewData(req, { pluginJsFiles: js ? [js] : false }))
    })
}
