const { routeUtils } = require('./../../utils')

module.exports = (app, route) => {

  route.draw(app)
    .get((req, res) => {
      res.render("feedback-plugin", routeUtils.getViewData(req, {}))
    })
}
