import BlogCard, { BlogCardProps } from "@/mail-service/templates/blog-card";
import JobCard, { JobCardProps } from "@/mail-service/templates/job-card";
import CompleteProfile, { CompleteProfileProps } from "@/mail-service/templates/complete-profile";
import WelcomeEmail, { WelcomeEmailProps } from "@/mail-service/templates/welcome-email";
import { ReactElement } from "react";

export type EmailTemplateProps = {
  jobCardsMail: JobCardProps;
  blogPostsMail: BlogCardProps;
  completeProfileMail: CompleteProfileProps;
  welcomeMail: WelcomeEmailProps;
};

export const emailTemplates: {
  [K in keyof EmailTemplateProps]: {
    component: (props: EmailTemplateProps[K]) => ReactElement,
    subject: string
  };
} = {
  jobCardsMail: {
    component: JobCard,
    subject: "We Found Jobs That Fit You Perfectly! - myjobb"
  },
  blogPostsMail: {
    component: BlogCard,
    subject: "They're reading this. Are you? - myjobb"
  },
  completeProfileMail: {
    component: CompleteProfile,
    subject: "Unlock Best-Matched Jobs Now! - myjobb"
  },
  welcomeMail: {
    component: WelcomeEmail,
    subject: "Search your Dream Job with myjobb"
  },
};