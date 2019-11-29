const { routeUtils, getClientJs } = require('./../../utils')

module.exports = (app, route) => {

  route.draw(app)
    .get((req, res) => {
      const js = getClientJs(req, "thing")

      res.render("feedback-plugin", routeUtils.getViewData(req, { jsFiles: js ? [js] : false }))
    })
}
