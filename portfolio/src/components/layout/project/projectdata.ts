import imgs from "../../../assets/Frame 1.webp";
import thumbnail from "../../../assets/project/thumbnail/Frame 2 (1).webp";
import thumbnail1 from "../../../assets/project/thumbnail/Frame 7.webp";
import thumbnail2 from "../../../assets/project/thumbnail/Frame 6 (1).webp";
import thumbnail3 from '../../../assets/project/thumbnail/Frame 14.webp'

// Project 1
import img3 from "../../../assets/project/project1/Frame 13.webp";
import img2 from "../../../assets/project/project1/Frame 12.webp";
import img1 from "../../../assets/project/project1/Frame 9.webp";


// Project 2 
import img5 from "../../../assets/project/project2/image 5.webp";
import img7 from "../../../assets/project/project2/image 7.webp";
import img6 from "../../../assets/project/project2/image 6.webp";
import img8 from "../../../assets/project/project2/image 8.webp";

// Project 3
import img4 from "../../../assets/project/project3/image 4.png";

import img9 from '../../../assets/project/project4/screencapture-linkmatch-2026-04-13-18_11_51.pdf - Page 1 of 5.webp'
import img10 from '../../../assets/project/project4/screencapture-linkmatch-2026-04-13-18_11_51.pdf - Page 1 of 6.webp'
import img11 from '../../../assets/project/project4/screencapture-linkmatch-2026-04-13-18_11_51.pdf - Page 2 of 5.webp'
import img12 from '../../../assets/project//project4/screencapture-linkmatch-2026-04-13-18_11_51.pdf - Page 2 of 6.webp'



const ProjectData = [
    {
        imgs: [{ url: img1 }, { url: img2 }, { url: img3 }],
        thumbnail: thumbnail,
        category: "Software",
        heading: "A full stack datalake software designed for non technical user",
        budget: `$996 - $1200`,
        problem:
            "Many people want to organize all their data in one place and extract meaningful insights from it over time. However, most existing tools in the market come with a steep learning curve. They often require technical knowledge, making them inaccessible and overwhelming for the average user.",
        solution:
            "We took on this challenge to build a tool that is simple, intuitive, and accessible to everyone. Our solution allows users to get started within minutes—no technical expertise required—while seamlessly organizing and managing their data, so they can focus on gaining insights instead of struggling with complexity.",
        link: "google.com",
    },

    {
        imgs: [{ url: img5 }, { url: img6 }, { url: img7 }, { url: img8 }],
        thumbnail: thumbnail1,
        category: "Website",
        heading: "A full stack datalake software design for non technical user",
        budget: `$996 - $1200`,
        problem: "Karte hai bro",
        solution: "Kar diya bro",
        link: "google.com",
    },

    {
        imgs: [{ url: img4 }],
        thumbnail: thumbnail2,
        category: "Automation",
        heading: "A full stack datalake software design for non technical user",
        budget: `$996 - $1200`,
        problem: "Karte hai bro",
        solution: "Kar diya bro",
        link: "google.com",
    },

    {
        imgs: [{ url: img9 }, { url: img10 }, { url: img11 }, { url: img12 }],
        thumbnail: thumbnail3,
        category: "Software",
        heading: "CRM Integration Built for Sales and Recruiting Success",
        budget: `$996 - $1200`,
        problem: "Millions of people lose time and trust every day navigating fragmented, unreliable information online, turning simple decisions into frustrating and inefficient experiences.",
        solution: "We are building a highly reliable, user-first platform that brings accurate, verified, and personalized information into one place—empowering people to make faster, smarter decisions with confidence and trust.",
        link: "google.com",
    },

    {
        imgs: [{ url: imgs }, { url: imgs }],
        thumbnail: thumbnail,
        category: "Software",
        heading: "A full stack datalake software design for non technical user",
        budget: `$996 - $1200`,
        problem: "Karte hai bro",
        solution: "Kar diya bro",
        link: "google.com",
    },

    {
        imgs: [{ url: imgs }, { url: imgs }],
        thumbnail: thumbnail,
        category: "Software",
        heading: "A full stack datalake software design for non technical user",
        budget: `$996 - $1200`,
        problem: "Karte hai bro",
        solution: "Kar diya bro",
        link: "google.com",
    },
];

export default ProjectData;
