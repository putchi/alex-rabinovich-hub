import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 6,
      description: 'Main paragraph displayed in the hero section',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'bio',
    },
    prepare(selection) {
      const title = selection.title as string
      return {
        title: 'Hero',
        subtitle: title?.slice(0, 80) + (title?.length > 80 ? '…' : ''),
      }
    },
  },
})
