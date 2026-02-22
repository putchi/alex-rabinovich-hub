import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      description: 'Full name displayed in the hero heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Owner Title',
      type: 'string',
      description: 'Professional tagline shown under the name in hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Full GitHub profile URL',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      description: 'Full LinkedIn profile URL',
    }),
  ],
  preview: {
    select: {
      title: 'ownerName',
      subtitle: 'ownerTitle',
    },
  },
})
