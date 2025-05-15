import { render, pretty } from "@react-email/render"
import JobCard from "./emails/job-card.js";
import { jobOpenings, testimonial } from "./constants.js";
import React from "react";

const html = await pretty(await render(<JobCard jobOpenings={jobOpenings} testimonial={testimonial} />))
// const html = await render(<JobCard jobOpenings={jobOpenings} testimonial={testimonial} />);

console.log(html);