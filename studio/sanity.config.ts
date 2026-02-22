import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const singletonTypes = new Set(['siteSettings', 'hero', 'about'])

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Alex Rabinovich Portfolio',

  projectId: 'tpg3gf74',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
            S.listItem()
              .title('Hero')
              .id('hero')
              .child(
                S.document().schemaType('hero').documentId('hero'),
              ),
            S.listItem()
              .title('About')
              .id('about')
              .child(
                S.document().schemaType('about').documentId('about'),
              ),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Prevent new document creation for singleton types
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Allow only non-destructive actions on singletons
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
