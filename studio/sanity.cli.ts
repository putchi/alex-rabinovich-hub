import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tpg3gf74',
    dataset: 'production',
  },
  studioHost: 'alex-rabinovich',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'h389ui1fs826l0kn378px92s',
  },
})
