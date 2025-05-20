import { Img, Link, Section, Text } from "@react-email/components";
import { baseURL, links, logoURL, whiteBG } from "../constants.js";
import * as React from "react";

interface IFooter {
  containerClass?: string
}

const Footer = ({ containerClass }: IFooter) => (
  <Section className={`pt-2 ${containerClass}`}>
    <Section className={"p-2 pb-8"} style={{
      borderBottom: "1px solid #D9D9D9"
    }}>
      <div className={"mx-auto"}
           style={{
             backgroundImage: `url(${whiteBG})`,
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             width: "fit-content",
             padding: 6,
             paddingLeft: 8,
             paddingRight: 8,
             borderRadius: 8
           }}
      >
        <Img
          src={logoURL} alt={"myjobb"}
          width={98} height={26}
          className={"mx-auto"}
        />
      </div>
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
)

export default Footer;