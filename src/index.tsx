import { render, pretty } from "@react-email/render"
import JobCard from "./emails/job-card.js";
import { blogs, jobOpenings, testimonial } from "./constants.js";
import React from "react";
import BlogCard from "./emails/blog-card.js";

const html = await pretty(await render(<JobCard jobOpenings={jobOpenings} testimonial={testimonial} />))
// const html = await pretty(await render(<BlogCard blogs={blogs} firstName={"Jhalak"} />))
// const html = await render(<JobCard jobOpenings={jobOpenings} testimonial={testimonial} />);

console.log(html);