import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
      rows: 4,
      description: 'First paragraph in the About section (bold/primary color)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
      rows: 6,
      description: 'Second paragraph in the About section (muted color)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'Technology tag pills — drag to reorder',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'paragraph1',
    },
    prepare(selection) {
      const title = selection.title as string
      return {
        title: 'About',
        subtitle: title?.slice(0, 80) + (title?.length > 80 ? '…' : ''),
      }
    },
  },
})
