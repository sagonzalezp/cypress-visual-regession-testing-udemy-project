/// <reference types="cypress" />

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
