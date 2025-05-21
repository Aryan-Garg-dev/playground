import {
  Html, Button, Container, Section, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import Header from "@/mail-service/components/header";
import Footer from "@/mail-service/components/footer";
import EmailHead from "@/mail-service/components/head";
import { links } from "@/mail-service/constants";

export interface WelcomeEmailProps {
  firstName: string,
  headerText?: string,
}

export const WelcomeEmail = (
  {
    firstName,
    headerText = "Search your Dream Job with myjobb"
  }: WelcomeEmailProps
) => (
  <Html lang={"en"} dir={"ltr"}>
    <EmailHead title={"Complete your profile - myjobb"} />
    <Tailwind>
      <Body className={"bg-[#FFFFFF] mx-auto my-0"} style={{
        fontFamily: "'Inter', Verdana",
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFFF !important",
        paddingBlock: "58px"
      }}>
        <Preview>{headerText}</Preview>
        <Container className={"mx-auto max-w-sm py-8 !bg-white"} style={{
          backgroundColor: "#fff !important",
          color: "#000 !important",
          border: "2px solid #00E2B7",
          borderRadius: "8px"
        }}>
          {/* Main */}
          <Section className={"mx-auto px-4"}>
            {/* Header */}
            <Header headerText={headerText} />

            {/* User */}
            <Section>
              <div className={"font-bold text-[14px] mt-4 mb-4"}>Hey {firstName},</div>
              <div className={"text-[14px] mb-4"}>Welcome to<span className={"font-bold"}> Myjobb AI!</span></div>
              <div className={"text-[14px] mb-4"}>You just took the first step toward finding the right job<span className={"font-bold"}> without all the hassle.</span></div>
              <div className={"text-[14px] mb-4"}>Here’s how we’ll help:</div>
              <ul>
                <li className={"text-[14px] mb-4 -ml-4"}><span className={"font-bold"}>Apply only to jobs you match to - </span>no irrelevant clutter</li>
                <li className={"text-[14px] mb-4 -ml-4"}><span className={"font-bold"}>See a personalized match score - </span>know where you truly fit</li>
                <li className={"text-[14px] mb-4 -ml-4"}><span className={"font-bold"}>We scan multiple job boards - </span>so you don’t waste time hopping between tabs</li>
              </ul>
              <div className={"text-[14px] mb-4"}>Follow these 3 simple steps to land your dream job!</div>
              <div className={"text-[14px] mb-4"}><span className={"font-bold"}>Step 1: </span>Upload your Resume</div>
              <div className={"text-[14px] mb-4"}><span className={"font-bold"}>Step 2: </span>Enter your Preferences.</div>
              <div className={"text-[14px] mb-4"}><span className={"font-bold"}>Step 3: </span>Get Relevant Job Matches.</div>
              <div className={"text-[14px] mb-4"}>Let’s make job hunting stress-free!</div>
              <center>
                <Button href={links.site} className={"mx-auto text-black py-3 px-3 text-[14px] mb-8 font-semibold text-center"}
                  style={{
                    borderRadius: "8px",
                    width: 'fit-content',
                    background: "linear-gradient(to right, #00E266CC, #00E2B7CC)"
                  }}
                >
                  Try myjobb AI now
                </Button>
              </center>
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

WelcomeEmail.PreviewProps = {
  firstName: "Jhalak",
}

export default WelcomeEmail;