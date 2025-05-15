export interface JobOpening {
  title: string,
  companyName: string,
  companyLogo: string,
  applicantsCount: number,
  applyLink: string,
  score: number,
  postedAt: Date
}

export const jobOpenings: JobOpening[] = [
  {
    title: "Product Manager",
    companyName: "Skaud: a payoneer company",
    companyLogo: "https://avatars.githubusercontent.com/u/148696092?v=4",
    applicantsCount: 150,
    applyLink: "https://google.com/",
    score: 0.75,
    postedAt: new Date()
  },
  {
    title: "Product Manager",
    companyName: "Skaud: a payoneer company",
    companyLogo: "https://avatars.githubusercontent.com/u/148696092?v=4",
    applicantsCount: 150,
    applyLink: "https://google.com/",
    score: 0.6,
    postedAt: new Date("2025-01-15")
  },
  {
    title: "Product Manager",
    companyName: "Skaud: a payoneer company",
    companyLogo: "https://avatars.githubusercontent.com/u/148696092?v=4",
    applicantsCount: 150,
    applyLink: "https://google.com/",
    score: 0.4,
    postedAt: new Date("2025-05-10")
  },
  {
    title: "Product Manager",
    companyName: "Skaud: a payoneer company",
    companyLogo: "https://avatars.githubusercontent.com/u/148696092?v=4",
    applicantsCount: 150,
    applyLink: "https://google.com/",
    score: 0.75,
    postedAt: new Date()
  },
  {
    title: "Product Manager",
    companyName: "Skaud: a payoneer company",
    companyLogo: "https://avatars.githubusercontent.com/u/148696092?v=4",
    applicantsCount: 150,
    applyLink: "https://google.com/",
    score: 0.75,
    postedAt: new Date()
  }
]

export const links = {
  linkedin: "https://google.com/",
  telegram: "https://google.com/",
  email: "https://google.com/",
  aboutUs: "https://google.com/",
  blogs: "https://google.com/",
  privacyPolicy: "https://google.com/",
  TOS: "https://google.com/",
  unsubscribe: "https://google.com/",
  viewMoreOpportunities: "https://google.com/"
}

