export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    ownerName,
    ownerTitle,
    githubUrl,
    linkedinUrl
  }
`

export const HERO_QUERY = `
  *[_type == "hero" && _id == "hero"][0] {
    bio
  }
`

export const ABOUT_QUERY = `
  *[_type == "about" && _id == "about"][0] {
    paragraph1,
    paragraph2,
    skills
  }
`

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    tags,
    link,
    order
  }
`
