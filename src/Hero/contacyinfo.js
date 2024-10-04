import LinkedIn, { GitHub, GMail, Portfolio } from "../Hero/icons";
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/satyendra-singh-8b265a255/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/satyendra9580",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:seenu5180singh@gmail.com",
        icon: <GMail />,
    },

    {
        id: 5,
        name: "Portfolio",
        link: "https://personal-portfolio-using-react-five.vercel.app/",
        icon: <Portfolio />,
        download: true
    }
];

export default contactInfo;