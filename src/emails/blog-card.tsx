import {
  Html, Button, Heading, Head, Container, Row, Section, Column, Font, Hr, Img, Link, Text, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import { Blog, blogs } from "../constants.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import EmailHead from "../components/head.js";

interface BlogCardProps {
  firstName: string,
  blogs: Blog[],
  headerText?: string,
}

export const BlogCard = (
  {
    firstName,
    blogs,
    headerText = "They're reading this. Are you?"
  }: BlogCardProps
) => (
  <Html lang={"en"} dir={"ltr"}>
    <EmailHead title={"Latest Blogs Just for You - myjobb"} />
    <Tailwind>
      <Body className={"bg-[#E2FCEDCC] mx-auto my-0"} style={{
        fontFamily: "'Inter', Verdana",
        margin: 0,
        padding: 0,
        backgroundColor: "#E2FCEDCC !important"
      }}>
        <Preview>{headerText}</Preview>
        <Container className={"mx-auto max-w-sm py-8 !bg-white"} style={{
          backgroundColor: "#fff !important",
          color: "#000 !important",
        }}>
          {/* Main */}
          <Section className={"mx-auto px-4"}>
          {/* Header */}
            <Header headerText={headerText} />
            {/* User */}
            <Section>
              <span className={"font-bold text-[14px] block mt-4 mb-4"}>Dear {firstName},</span>
              <span className={"text-[14px] block mb-4"}>Check out these <span className={"font-bold"}>must-read blogs</span> to boost your job search:</span>
            </Section>

            {/* Blog Section */}
            <Section>
              {blogs.map(({tag, title, link}, index)=>(
                <Link key={index} href={link}>
                  <Section className={"p-4 mb-3 bg-[#70E6B4] rounded-xl"}>
                    <span className={"w-fit block text-[10px] mb-2.5 !bg-white !text-black px-2 py-1 font-medium rounded-md"}>{tag}</span>
                    <span className={"text-[14px] !text-black font-semibold"}>{title}</span>
                  </Section>
                </Link>
              ))}
            </Section>

            {/* User Tip */}
            <Section className={"pb-2"}>
              <span className={"text-[14px] my-5 mb-3 block"}><span className={"font-bold"}>Pro Tip:</span> Stay ahead by applying these insights to your job search today!</span>
              <span className={"text-[14px] mb-5 font-bold block"}>Happy job hunting!</span>
            </Section>
          </Section>
          <div style={{ borderBottom: "1px solid #D9D9D9" }}></div>
          {/* Footer */}
          <Footer containerClass={"pt-5 px-4"} />
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

BlogCard.PreviewProps = {
  firstName: "Jhalak",
  blogs: blogs
}

export default BlogCard;