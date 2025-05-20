import { jobOpenings } from "./constants.js";
import { formatNum, match, relativeTime } from "./utils.js";
import prettify from "html-prettify";

interface JobOpening {
  title: string,
  companyName: string,
  companyLogo: string,
  applyCountViaSource: number,
  jobLink: string,
  score: number,
  postedAt: Date
}

const jobPost = ({
 postedAt,
 jobLink,
 companyName,
 applyCountViaSource,
 companyLogo,
 title,
 score,
}: JobOpening) => {
  const jobOpening = `
  <table
                          align="center"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="margin-bottom:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:1rem;padding-bottom:1rem;border:1px solid #D9D9D9;border-radius:24px;box-shadow:0 2px 4px 0 #00000026">
                    <tbody>
                    <tr>
                      <td>
                        <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation">
                          <tbody style="width:100%">
                          <tr style="width:100%">
                            <td data-id="__react-email-column">
                              <img
                                      alt="company-logo"
                                      height="60"
                                      src="${companyLogo}"
                                      style="display:block;outline:none;border:1px solid #D9D9D9;text-decoration:none;border-radius:16px;padding:2px"
                                      width="60" />
                            </td>
                            <td
                                    data-id="__react-email-column"
                                    style="padding-top:0px;padding-bottom:0px;padding-left:0.5rem;padding-right:0.5rem;width:100%;flex:1 1 0%">
                                    <span
                                            style="font-size:10px;color:rgb(102,102,102);margin-top:0.25rem;margin-bottom:0.25rem;padding:0px;display:block"
                                    >Posted
                                      <!-- -->${relativeTime(postedAt)}</span
                                    ><span
                                    style="font-weight:600;font-size:14px;margin-top:0.25rem;margin-bottom:0.25rem;padding:0px;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1
                            >${title}</span
                            ><span
                                    style="font-weight:500;font-size:12px;margin-top:0.25rem;margin-bottom:0.25rem;padding:0px;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1"
                            >${companyName}</span
                            >
                            </td>
                            <td data-id="__react-email-column">
                              <p
                                      class="py-auto"
                                      style="margin-left:auto;margin-right:auto;text-align:center;color:rgb(255,255,255);margin-top:0.75rem;margin-bottom:0.75rem;font-size:14px;line-height:24px;background-image:url(${match(score).image});background-repeat:no-repeat;background-size:cover;width:60px;height:52px;padding-top:8px">
                                      <span
                                              style="font-weight:500;font-size:16px;margin-top:0px;margin-bottom:0px"
                                      >${match(score).value}<!-- -->%</span
                                      ><span
                                      style="font-size:10px;display:block;margin-top:0px;margin-bottom:0px"
                              >Match</span
                              >
                              </p>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="padding-left:0.25rem;margin-top:0.75rem">
                          <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                                    data-id="__react-email-column"
                                    style="width:100%">
                                    <span
                                            style="font-size:10px;background-color:rgb(229,252,240);padding-top:0.125rem;padding-bottom:0.125rem;padding-left:0.375rem;padding-right:0.375rem;border-radius:4px"
                                    >${formatNum(applyCountViaSource)}<!-- -->
                                      applicants</span
                                    >
                            </td>
                            <td
                                    data-id="__react-email-column"
                                    style="min-width:90px">
                              <a
                                      href="${jobLink}"
                                      style="color:rgb(0,0,0);padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:12px;font-weight:500;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;background-color:#00E266;border-radius:8px;padding:8px 12px 8px 12px"
                                      target="_blank"
                              ><span
                              ><!--[if mso]><i style="mso-font-width:300%;mso-text-raise:12" hidden>&#8202;&#8202;</i><![endif]--></span
                              ><span
                                      style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:6px"
                              >Apply Now</span
                              ><span
                              ><!--[if mso]><i style="mso-font-width:300%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span
                              ></a
                              >
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    </tbody>
                  </table>
  `;
  return jobOpening;
};

const renderJobPosts = (jobOpening: JobOpening[]) => {
  let jobPostsHTML: string = "";
  jobOpening.forEach(jobOpening=>{
    jobPostsHTML += jobPost(jobOpening);
  })
  return jobPostsHTML;
}

interface IJobPostMAIL {
  jobOpenings: JobOpening[],
  testimonial: {
    name: string,
    username: string,
    text: string,
  }
}

export const jobPostMAIL = ({jobOpenings, testimonial: { name, username, text }}: IJobPostMAIL)=>{
  return (
    `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="preload"
      as="image"
      href="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/logo.png" />
    <link
      rel="preload"
      as="image"
      href="https://avatars.githubusercontent.com/u/148696092?v=4" />
    <link
      rel="preload"
      as="image"
      href="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/linkedin.png" />
    <link
      rel="preload"
      as="image"
      href="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/facebook.png" />
    <link
      rel="preload"
      as="image"
      href="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/email.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light" />
    <title>Latest Job Openings Just for You - myjobb</title>
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'Verdana';
        src: url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap) format('woff2');
      }

      * {
        font-family: 'Inter', Verdana;
      }
    </style>
    <style type="text/css">
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
    </style>
  </head>
  <body
    style="background-color:#E2FCEDCC !important;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;font-family:&#x27;Inter&#x27;, Verdana;margin:0;padding:0">
    <!--$-->
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
      data-skip-in-text="true">
      Stay updated with the latest job openings tailored just for you.
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="margin-left:auto;margin-right:auto;max-width:24rem;padding-top:2rem;padding-bottom:2rem;padding-left:1rem;padding-right:1rem;background-color:#fff !important;color:#000 !important">
      <tbody>
        <tr style="width:100%">
          <td>
            <img
              alt="myjobb"
              height="26"
              src="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/logo.png"
              style="margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
              width="98" />
            <h1
              style="padding:2rem;font-weight:700;font-size:1.125rem;line-height:1.75rem;border-radius:0.375rem;background:linear-gradient(to bottom, #00E2B740, #00E2B700)">
              We Found Jobs That Fit You Perfectly!
            </h1>
            <p
              style="margin-top:2rem;font-size:14px;line-height:24px;margin-bottom:16px">
              Here are the top relevant job openings for you!
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation">
              <tbody>
                <tr>
                  <td>
                   ${renderJobPosts(jobOpenings)}
                    <p
                      style="margin-top:0px;margin-bottom:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:14px;line-height:24px">
                      New opportunities are added daily, don’t miss out!
                    </p>
                    <a
                      href="https://dashboard.myjobb.ai"
                      style="color:rgb(0,0,0);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0.75rem;padding-right:0.75rem;font-size:14px;font-weight:600;text-align:center;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;border-radius:8px;width:340px;background:linear-gradient(to right, #00E266, #00E2B7);padding:12px 12px 12px 12px"
                      target="_blank"
                      ><span
                        ><!--[if mso]><i style="mso-font-width:300%;mso-text-raise:18" hidden>&#8202;&#8202;</i><![endif]--></span
                      ><span
                        style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px"
                        >View more opportunities</span
                      ><span
                        ><!--[if mso]><i style="mso-font-width:300%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top:1rem;margin-bottom:1rem;padding-top:1.5rem;padding-bottom:1.5rem;padding-left:0.75rem;padding-right:0.75rem;background:linear-gradient(to right, #00E26605, #00E26610);border-bottom:1px solid #D9D9D9">
              <tbody>
                <tr>
                  <td>
                    <p
                      style="text-align:center;font-weight:700;font-size:20px;margin-top:1rem;margin-bottom:1rem;line-height:24px">
                      Community Spotlight
                    </p>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="margin-top:1rem;margin-bottom:1rem">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td
                            data-id="__react-email-column"
                            style="margin-left:auto;margin-right:auto;background-color:rgb(255,255,255);padding:1rem;padding-top:1.5rem;padding-bottom:1.5rem;border:1px solid #D9D9D9;border-radius:16px">
                            <span
                              style="font-size:13px;display:block;margin-bottom:0.5rem"
                              >${text}</span
                            ><span
                              style="display:block;font-size:12px;font-weight:600;margin-top:0.5rem;margin-bottom:0.125rem"
                              >${name}</span
                            ><span
                              style="display:block;font-size:10px;color:rgb(51,51,51)"
                              >@<!-- -->${username}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding-top:0.5rem">
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding:0.5rem;padding-bottom:2rem;border-bottom:1px solid #D9D9D9">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              alt="myjobb"
                              height="26"
                              src="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/logo.png"
                              style="margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
                              width="98" />
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="width:fit-content;margin-top:1rem;margin-bottom:0.5rem;margin-left:auto;margin-right:auto">
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      href="https://linkedin.com/company/myjobbai"
                                      style="color:#067df7;text-decoration-line:none"
                                      target="_blank"
                                      ><img
                                        alt="linkedin"
                                        height="32"
                                        src="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/linkedin.png"
                                        style="display:inline;margin-left:0.25rem;margin-right:0.25rem;outline:none;border:none;text-decoration:none"
                                        width="32" /></a
                                    ><a
                                      href="https://t.me/myjobb_ai"
                                      style="color:#067df7;text-decoration-line:none"
                                      target="_blank"
                                      ><img
                                        alt="telegram"
                                        height="32"
                                        src="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/facebook.png"
                                        style="display:inline;margin-left:0.25rem;margin-right:0.25rem;outline:none;border:none;text-decoration:none"
                                        width="32" /></a
                                    ><a
                                      class="mailto:support@myjobb.ai"
                                      style="color:#067df7;text-decoration-line:none"
                                      target="_blank"
                                      ><img
                                        alt="mail"
                                        height="32"
                                        src="https://myjobb-job.s3.ap-south-1.amazonaws.com/emails/email.png"
                                        style="display:inline;margin-left:0.25rem;margin-right:0.25rem;outline:none;border:none;text-decoration:none"
                                        width="32"
                                    /></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="width:fit-content;margin-left:auto;margin-right:auto">
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      href="https://myjobb.ai/about-us"
                                      style="margin-left:0.5rem;margin-right:0.5rem;color:rgb(0,0,0);font-size:13px;font-weight:500;text-decoration-line:none"
                                      target="_blank"
                                      >About Us</a
                                    ><a
                                      href="https://myjobb.ai/blog"
                                      style="margin-left:0.5rem;margin-right:0.5rem;color:rgb(0,0,0);font-size:13px;font-weight:500;text-decoration-line:none"
                                      target="_blank"
                                      >Blogs</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding-top:1rem">
                      <tbody>
                        <tr>
                          <td>
                            <p
                              style="text-align:center;font-size:13px;font-weight:500;margin-top:0.25rem;margin-bottom:0.25rem;line-height:24px">
                              All rights reserved © 2025 myjobb technologies
                            </p>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="width:fit-content;margin-left:auto;margin-right:auto">
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      href="https://myjobb.ai/privacy-policy"
                                      style="margin-left:0.5rem;margin-right:0.5rem;color:rgb(0,0,0);font-size:13px;font-weight:500;text-decoration-line:none"
                                      target="_blank"
                                      >Privacy Policy</a
                                    ><a
                                      href="https://myjobb.ai/terms-of-service"
                                      style="margin-left:0.5rem;margin-right:0.5rem;color:rgb(0,0,0);font-size:13px;font-weight:500;text-decoration-line:none"
                                      target="_blank"
                                      >TOS</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              class="mx-aut"
                              style="width:fit-content;margin-top:0.5rem">
                              <tbody>
                                <tr>
                                  <td>
                                    <u
                                      ><a
                                        href="https://google.com/"
                                        style="font-size:13px;font-weight:500;color:rgb(0,0,0);text-decoration-line:none"
                                        target="_blank"
                                        >Unsubscribe</a
                                      ></u
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--7--><!--/$-->
  </body>
</html>
    `
  )
}

console.log(prettify(jobPostMAIL(jobOpenings)));

