import {
  Html, Button, Heading, Head, Container, Row, Section, Column, Font, Hr, Img, Link, Text, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import { formatNum, match, relativeTime } from "../utils.js";
import { JobOpening, jobOpenings as openings, links } from "../constants.js";

interface JobCardProps {
  jobOpenings: JobOpening[],
  testimonial: {
    name: string,
    username: string,
    text: string,
  }
}

const JobCard = (
  {jobOpenings, testimonial: { text, username, name }}: JobCardProps
) => (
  <Html lang={"en"} dir={"ltr"}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Latest Job Openings Just for You - myjobb</title>
      <Font
        fontFamily={"Inter"}
        fallbackFontFamily={["Verdana"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
          format: "woff2"
        }}
      />
    </Head>
    <Tailwind>
      <Body className={"bg-[#E2FCEDCC] mx-auto my-0"} style={{
        fontFamily: "'Inter', Verdana",
        margin: 0,
        padding: 0
      }}>
        <Preview>Stay updated with the latest job openings tailored just for you.</Preview>
        <Container className={"mx-auto max-w-sm py-8 px-4 bg-white"}>
          <Img
            src={"/static/images/logo.png"} alt={"myjobb"}
            width={98} height={26}
            className={"mx-auto"}
          />
          <Heading className={"p-8 font-bold text-lg rounded-md"} style={{
            background: "linear-gradient(to bottom, #00E2B740, #00E2B700)"
          }}>
            We Found Jobs That Fit You Perfectly!
          </Heading>
          <Text className={"mt-8"}>Here are the top relevant job openings for you!</Text>
          <Section>
            {jobOpenings.map(job=>(
              <Section className={"mb-4 px-3 py-4"} style={{
                border: "1px solid #D9D9D9",
                borderRadius: "24px",
                boxShadow: "0 2px 4px 0 #00000026"
              }} >
                <Row>
                  <Column>
                    <Img src={job.companyLogo} alt={"company-logo"} height={60} width={60}
                      style={{
                        borderRadius: "16px",
                        border: "1px solid #D9D9D9",
                        padding: 2
                      }}
                    />
                  </Column>
                  <Column className={"py-0 px-2 w-full flex-1"}>
                    <span className={"text-[10px] text-[#666666] my-1 p-0 block"}>Posted {relativeTime(job.postedAt)}</span>
                    <span className={"font-semibold text-[12px] my-1 p-0 block"}>{job.title}</span>
                    <span className = {"font-medium text-[11px] my-1 p-0 block"}>{job.companyName}</span>
                  </Column>
                  <Column>
                    <Text className={"py-auto mx-auto text-center text-white my-3"} style={{
                      backgroundImage: `url(${match(job.score).image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: 60,
                      height: 52,
                      paddingTop: 8,
                    }}>
                      <span className={"font-medium text-[16px] my-0"}>{match(job.score).value}%</span>
                      <span className={"text-[10px] block my-0"}>Match</span>
                    </Text>
                  </Column>
                </Row>
                <Row className={"pl-1 mt-6"}>
                  <Column className={"w-full"}>
                    <span className={"text-[10px] bg-[#E5FCF0] py-0.5 px-1.5"}
                          style={{ borderRadius: "4px" }}
                    >{formatNum(job.applicantsCount)} applicants</span>
                  </Column>
                  <Column className={"min-w-[87px]"}>
                    <Button href={job.applyLink} className={"text-black py-2 px-3 text-[12px] font-medium"}
                          style={{ backgroundColor: "#00E266", borderRadius: "8px"}}
                    >
                      Apply Now
                    </Button>
                  </Column>
                </Row>
              </Section>
            ))}
            <Text className={"my-0 mb-2"}>
              New opportunities are added daily, don’t miss out!
            </Text>
            <Button href={links.viewMoreOpportunities} className={"text-black py-3 px-3 text-[14px] font-semibold text-center"}
              style={{
                borderRadius: "8px",
                width: '340px',
                background: "linear-gradient(to right, #00E266, #00E2B7)"
              }}
            >
              View more opportunities
            </Button>
          </Section>
          <Section className={"my-4 py-6 px-3"} style={{
            background: "linear-gradient(to right, #00E26605, #00E26610)",
            borderBottom: "1px solid #D9D9D9"
          }}>
            <Text className={"text-center font-bold text-[20px] my-4"}>
              Community Spotlight
            </Text>
            <Row className={"my-4"}>
              <Column className={"mx-auto bg-white p-4 py-6"} style={{
                border: "1px solid #D9D9D9",
                borderRadius: "16px"
              }}>
                <span className={"text-[13px] block mb-2"}>{text}</span>
                <span className={"block text-[12px] font-semibold mt-2 mb-0.5"}>{name}</span>
                <span className={"block text-[10px] text-[#333333]"}>@{username}</span>
              </Column>
            </Row>
          </Section>
          <Section className={"pt-2"}>
            <Section className={"p-2 pb-8"} style={{
              borderBottom: "1px solid #D9D9D9"
            }}>
              <Img
                src={"/static/images/logo.png"} alt={"myjobb"}
                width={98} height={26}
                className={"mx-auto"}
              />
              <Section className={"w-fit mt-4 mb-2 mx-auto"}>
                <Link href={links.linkedin}>
                  <Img className={"inline mx-1"} src={"https://img.icons8.com/ios-filled/32/linkedin.png"} height={32} width={32} alt={"linkedin"} />
                </Link>
                <Link href={links.telegram}>
                  <Img className={"inline mx-1"} src={"https://img.icons8.com/ios-filled/32/telegram.png"} height={32} width={32} alt={"telegram"} />
                </Link>
                <Link className={links.email}>
                  <Img className={"inline mx-1"} src={"https://img.icons8.com/ios-filled/32/apple-mail.png"} height={32} width={32} alt={"mail"} />
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
                <Link href={links.unsubscribe} className={"underline text-[13px] font-medium text-black underline-offset-2"}>Unsubscribe</Link>
              </Section>
            </Section>
          </Section>

        </Container>
      </Body>
    </Tailwind>
  </Html>
)

JobCard.PreviewProps = {
  jobOpenings: openings,
  testimonial: {
    text: "Job searching has never been this easy! The AI matches were perfect, and I got interview calls within hours.",
    name: "Ishita Sharma",
    username: "ishita"
  }
}

export default JobCard;