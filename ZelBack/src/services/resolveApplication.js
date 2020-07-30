const log = require('../lib/log');

const zelappsService = require('./zelappsService');

async function getAppPort(app) {
  try {
    const specifics = zelappsService.getApplicationSpecifications(app, false);
    const { port } = specifics;
    return port;
  } catch (e) {
    log.error(e);
    return 0;
  }
}

module.exports = {
  getAppPort,
};
