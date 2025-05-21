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

export interface Blog {
  tag: string,
  title: string,
  link: string
}

export const blogs: Blog[] = [
  { tag: "Trending", title: "Top Tech Hubs for UX Designers in 2025: Opportunities and Community", link: "https://google.com/" },
  { tag: "Trending", title: "Top Tech Hubs for UX Designers in 2025: Opportunities and Community", link: "https://google.com/" },
  { tag: "Trending", title: "Top Tech Hubs for UX Designers in 2025: Opportunities and Community", link: "https://google.com/" },
  { tag: "Trending", title: "Top Tech Hubs for UX Designers in 2025: Opportunities and Community", link: "https://google.com/" },
  { tag: "Trending", title: "Top Tech Hubs for UX Designers in 2025: Opportunities and Community", link: "https://google.com/" },
]

export const baseURL = "https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/";
export const logoURL = "https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/logo.png";
export const whiteBG = "https://res.cloudinary.com/dasl0rqs5/image/upload/v1747376406/white-png-base_sbidx9.jpg";

export const links = {
  linkedin: "https://linkedin.com/company/myjobbai",
  telegram: "https://t.me/myjobb_ai",
  email: "mailto:support@myjobb.ai",
  aboutUs: "https://myjobb.ai/about-us",
  blogs: "https://myjobb.ai/blog",
  privacyPolicy: "https://myjobb.ai/privacy-policy",
  TOS: "https://myjobb.ai/terms-of-service",
  unsubscribe: "https://google.com/",
  viewMoreOpportunities: "https://dashboard.myjobb.ai",
  site: "https://myjobb.ai/"
}

export const testimonial = {
  text: "Job searching has never been this easy! The AI matches were perfect, and I got interview calls within hours.",
  name: "Ishita Sharma",
  username: "ishita"
}

