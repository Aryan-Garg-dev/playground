import {
  Html, Button, Heading, Head, Container, Row, Section, Column, Font, Hr, Img, Link, Text, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import { formatNum, match, relativeTime } from "../utils.js";
import { baseURL, Blog, blogs, links, logoURL } from "../constants.js";

interface BlogCardProps {
  firstName: string,
  blogs: Blog
}

export const BlogCard = (
  {
    firstName
  }: BlogCardProps
) => (
  <Html lang={"en"} dir={"ltr"}>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="color-scheme" content="light dark"/>
      <meta name="supported-color-schemes" content="light"/>
      <meta name="x-apple-disable-message-reformatting"/>
      <title>Latest Blogs Just for You - myjobb</title>
      <Font
        fontFamily={"Inter"}
        fallbackFontFamily={["Verdana"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
          format: "woff2"
        }}
      />
      <style type="text/css">
        {`
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          body, table, td, a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          }
          table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }
          body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            height: 100% !important;
          }
          /* Force Outlook to use 96 DPI */
          <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
        `}
      </style>
    </Head>
    <Tailwind>
      <Body className={"bg-[#E2FCEDCC] mx-auto my-0"} style={{
        fontFamily: "'Inter', Verdana",
        margin: 0,
        padding: 0,
        backgroundColor: "#E2FCEDCC !important"
      }}>
        <Preview>Stay updated with the latest blogs.</Preview>
        <Container className={"mx-auto max-w-sm py-8 px-4 !bg-white"} style={{
          backgroundColor: "#fff !important",
          color: "#000 !important",
        }}>
          {/* Header */}
          <Img
            src={logoURL} alt={"myjobb"}
            width={98} height={26}
            className={"mx-auto"}
          />
          <Heading className={"p-8 font-bold text-lg rounded-md"} style={{
            background: "linear-gradient(to bottom, #00E2B740, #00E2B700)"
          }}>
            Essential Reads for Every Job Seeker
          </Heading>

          {/* User */}
          <Section>
            <span className={"font-semibold text-[14px] block mt-4 mb-3"}>Dear {firstName},</span>
            <span className={"text-[14px] block mb-3"}>Check out these <span className={"font-semibold"}>must-read blogs</span> to boost your job search:</span>
          </Section>

          {/* Blog Section */}
          <Section>
            {blogs.map(({tag, title}, index)=>(
              <Section key={index} className={"p-4 py-6 mb-3 bg-[#32B77F] rounded-lg"}>
                <span className={"w-fit block text-[10px] mb-2.5 !bg-white px-2 py-1 font-medium rounded-md"}>{tag}</span>
                <span className={"text-[14px] !text-white font-medium"}>{title}</span>
              </Section>
            ))}
          </Section>

          {/* User Tip */}
          <Section className={"pb-2"} style={{ borderBottom: "1px solid #D9D9D9" }}>
            <span className={"text-[14px] my-5 mb-3 block"}><span className={"font-bold"}>Pro Tip:</span> Stay ahead by applying these insights to your job search today!</span>
            <span className={"text-[14px] mb-5 font-bold block"}>Happy job hunting!</span>
          </Section>

          {/* Footer */}
          <Section className={"pt-5"}>
            <Section className={"p-2 pb-8"} style={{
              borderBottom: "1px solid #D9D9D9"
            }}>
              <Img
                src={logoURL} alt={"myjobb"}
                width={98} height={26}
                className={"mx-auto"}
              />
              <Section className={"w-fit mt-4 mb-2 mx-auto"}>
                <Link href={links.linkedin}>
                  <Img className={"inline mx-1"} src={baseURL + "linkedin.png"} height={32} width={32} alt={"linkedin"} />
                </Link>
                <Link href={links.telegram}>
                  <Img className={"inline mx-1"} src={baseURL + "facebook.png"} height={32} width={32} alt={"telegram"} />
                </Link>
                <Link className={links.email}>
                  <Img className={"inline mx-1"} src={baseURL + "email.png"} height={32} width={32} alt={"mail"} />
                </Link>
              </Section>
              <Section className={"w-fit mx-auto"}>
                <Link href={links.aboutUs} className={"mx-2 text-black text-[13px] font-medium"}>About Us</Link>
                <Link href={links.blogs} className={"mx-2 text-black text-[13px] font-medium"}>Blogs</Link>
              </Section>
            </Section>
            <Section className={"pt-4"}>
              <Text className={"text-center text-[13px] font-medium my-1"}>All rights reserved © 2025 myjobb technologies</Text>
              <Section className={"w-fit mx-auto"}>
                <Link className={"mx-2 text-black text-[13px] font-medium"} href={links.privacyPolicy}>Privacy Policy</Link>
                <Link className={"mx-2 text-black text-[13px] font-medium"} href={links.TOS}>TOS</Link>
              </Section>
              <Section className={"w-fit mx-aut mt-2"}>
                <u>
                  <Link href={links.unsubscribe} className={"text-[13px] font-medium text-black"}>Unsubscribe</Link>
                </u>
              </Section>
            </Section>
          </Section>
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