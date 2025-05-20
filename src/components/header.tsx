import { logoURL, whiteBG } from "../constants.js";
import { Heading, Img, Section } from "@react-email/components";
import * as React from "react";

interface IHeader {
  headerText: string,
  containerClass?: string
}

const Header = ({ headerText, containerClass }: IHeader) => (
  <Section className={containerClass}>
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
    <Heading className={"p-8 font-bold text-lg rounded-md"} style={{
      background: "linear-gradient(to bottom, #00E2B720, #00E2B700)"
    }}>
      {headerText}
    </Heading>
  </Section>
)

export default Header;