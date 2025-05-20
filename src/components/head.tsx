import { Font, Head } from "@react-email/components";
import * as React from "react";

interface IEmailHead {
    title: string
}

const EmailHead = ({ title }: IEmailHead) => (
  <Head>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="color-scheme" content="light dark"/>
    <meta name="supported-color-schemes" content="light"/>
    <meta name="x-apple-disable-message-reformatting"/>
    <title>{title}</title>
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
)

export default EmailHead;