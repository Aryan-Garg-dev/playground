import {
  Html, Button, Container, Section, Tailwind, Body, Preview
} from "@react-email/components";
import * as React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import EmailHead from "../components/head.js";

interface CompleteProfileProps {
  firstName: string,
  completeProfileLink: string,
  headerText?: string
}

export const CompleteProfile = (
  {
    firstName,
    completeProfileLink,
    headerText = "Unlock Best-Matched Jobs Now!"
  }: CompleteProfileProps
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
        <Container className={"mx-auto max-w-sm py-8 rounded-md !bg-white"} style={{
          backgroundColor: "#fff !important",
          color: "#000 !important",
          border: "2px solid #00E2B7",
        }}>
          {/* Main */}
          <Section className={"mx-auto px-4"}>
            {/* Header */}
           <Header headerText={headerText} />

            {/* User */}
            <Section>
              <div className={"font-bold text-[14px] mt-4 mb-4"}>Dear {firstName},</div>
              <div className={"text-[14px] mb-4"}>Did you know?</div>
              <div className={"text-[14px] mb-4"}>Did you know<span className={"font-bold"}> 80% of candidates </span>who complete their profiles get<span className={"font-bold"}> better job matches?</span></div>
              <div className={"text-[14px] mb-4"}>Your profile is almost there!</div>
              <div className={"text-[14px] mb-4"}>Just<span className={"font-bold"}> a few more details </span>and you’ll get more <span className={"font-bold"}> relevant job opportunities.</span></div>
              <div className={"text-[14px] mb-4"}>Takes less than 2 minutes!</div>
              <center>
                <Button href={completeProfileLink} className={"mx-auto text-black py-3 px-3 text-[14px] mb-8 font-semibold text-center"}
                  style={{
                    borderRadius: "8px",
                    width: 'fit-content',
                    background: "linear-gradient(to right, #00E266CC, #00E2B7CC)"
                  }}
                >
                  Complete Your Profile Now
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

CompleteProfile.PreviewProps = {
  firstName: "Jhalak",
  completeProfileLink: "https://www.google.com"
}

export default CompleteProfile;