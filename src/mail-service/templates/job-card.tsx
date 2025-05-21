import {
  Html, Button, Heading, Head, Container, Row, Section, Column, Font, Hr, Img, Link, Text, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import { formatNum, match, relativeTime } from "@/mail-service/utils";
import { baseURL, JobOpening, jobOpenings as openings, links, logoURL, whiteBG, testimonial } from "@/mail-service/constants";
import Footer from "@/mail-service/components/footer";
import Header from "@/mail-service/components/header";
import EmailHead from "@/mail-service/components/head";

export interface JobCardProps {
  jobOpenings: JobOpening[],
  testimonial: {
    name: string,
    username: string,
    text: string,
  },
  headerText?: string
}

export const JobCard = ({
    jobOpenings,
    testimonial: { text, username, name },
    headerText = "We Found Jobs That Fit You Perfectly!"
  }: JobCardProps
) => (
  <Html lang={"en"} dir={"ltr"}>
    <EmailHead title={"Latest Job Openings Just for You - myjobb"} />
    <Tailwind>
      <Body className={"bg-[#E2FCEDCC] mx-auto my-0"} style={{
        fontFamily: "'Inter', Verdana",
        margin: 0,
        padding: 0,
        backgroundColor: "#E2FCEDCC !important"
      }}>
        <Preview>{headerText}</Preview>
        <Container className={"mx-auto max-w-sm py-8 px-4 !bg-white"} style={{
          backgroundColor: "#fff !important",
          color: "#000 !important",
        }}>
          <Header headerText={headerText} />
          <Text className={"mt-8"}>Here are the top relevant job openings for you!</Text>
          <Section>
            {jobOpenings.map((job, index)=>(
              <Section className={"mb-4 px-3 py-4"} key={index} style={{
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
                    <span className={"text-[10px] text-[#666666] my-1 p-0 block line-clamp-1"}>Posted {relativeTime(job.postedAt)}</span>
                    <span className={"font-semibold text-[14px] my-1 p-0 block line-clamp-1"}>{job.title}</span>
                    <span className = {"font-medium text-[12px] my-1 p-0 block line-clamp-1"}>{job.companyName}</span>
                  </Column>
                  <Column>
                    <Text className={"py-auto mx-auto text-center text-black font-semibold my-5"} style={{
                      width: 60,
                      height: 52,
                      paddingTop: 8,
                      borderStyle: "solid",
                      borderWidth: "3px",
                      borderColor: match(job.score).borderColor,
                      backgroundColor: match(job.score).bgColor,
                      borderRadius: "16px"
                    }}>
                      <span className={"text-[16px] font-bold mt-0.5 -mb-0.5 block"}>{match(job.score).value}%</span>
                      <span className={"text-[10px] block my-0"}>Match</span>
                    </Text>
                  </Column>
                </Row>
                <Row className={"pl-1 mt-3"}>
                  <Column className={"w-full"}>
                    <span className={"text-[10px] bg-[#E5FCF0] py-0.5 px-1.5"}
                          style={{ borderRadius: "4px" }}
                    >{formatNum(job.applicantsCount)} applicants</span>
                  </Column>
                  <Column className={"min-w-[90px]"}>
                    <Button href={job.applyLink} className={"text-black py-2 px-3 text-[12px] font-medium"}
                          style={{ backgroundColor: "#66EEA3", borderRadius: "8px"}}
                    >
                      Apply Now
                    </Button>
                  </Column>
                </Row>
              </Section>
            ))}
            <Text className={"mt-8 mb-2 py-2"}>
              New opportunities are added daily, don’t miss out!
            </Text>
            <center>
              <Button href={links.viewMoreOpportunities} className={"mx-auto text-black py-3 px-3 text-[14px] mb-8 font-semibold text-center"}
                style={{
                  borderRadius: "8px",
                  width: 'fit-content',
                  background: "linear-gradient(to right, #00E266CC, #00E2B7CC)"
                }}
              >
                View more opportunities
              </Button>
            </center>
          </Section>
          <Section className={"my-4 pt-12 pb-16 px-3"} style={{
            background: "linear-gradient(to bottom, #00E2B700, #00E2B720)",
            borderBottom: "1px solid #D9D9D9",
            borderRadius: 8
          }}>
            <Text className={"text-center font-bold text-[26px] mb-10"}>
              Community Spotlight
            </Text>
            <Row>
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
          <Footer />
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

JobCard.PreviewProps = {
  jobOpenings: openings,
  testimonial: testimonial
}

export default JobCard;