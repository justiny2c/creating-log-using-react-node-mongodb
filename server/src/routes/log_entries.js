'use strict';

module.exports = function(app) {
  const controller = require('../controllers/log_entries');

  app
    .route('/log-entries')
    .get(controller.index)
    .post(controller.create);

  app
    .route('/log-entries/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.destroy);
};
