import Currency_Converter from "../assets/Projects/currency..png"
import Tic_Tac_Toe from "../assets/Projects/tic tac toe.png"
import To_Do from "../assets/Projects/To.png"
import Personal_Portfolio from "../assets/Projects/see.png"
import money_tracker from "../assets/Projects/money_tracker.png"

const ProjectsData = [
    {
        img: Personal_Portfolio,
        name: "Personal Portfolio",
        demo: "",
        code: "",
        description: "This PORTFOLIO is build using React JS and Tailwind CSS",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
   
    {
        img: money_tracker,
        name: "Money-Tracker",
        demo: "https://money-tracker-01-frontend.onrender.com/",
        code: "https://github.com/satyendra9580/Money_tracker-01",
        description: " Money Tracker application that allows users to efficiently manage their persona finances, track expenses, and visualize spending patterns over time",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Currency_Converter,
        name: "Currency Converter",
        demo: "https://satyendra9580.github.io/Currency-Converter/",
        code: "https://github.com/satyendra9580/Currency-Converter",
        description: "A Currency Converter project involves developing an application that converts amounts between different currencies using real-time exchange rates obtained from an API.",
        style: {
            shadow: "shadow-[#763145]",
            cover: "from-[#763145]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Tic_Tac_Toe,
        name: "Tic Tac Toe",
        demo: "https://satyendra9580.github.io/Tic-Tac-Toe-Game/",
        code: "https://github.com/satyendra9580/Tic-Tac-Toe-Game",
        description: "A Tic Tac Toe project is build using JavaScript and this is my first JS project.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: To_Do,
        name: "To-Do App",
        demo: "https://satyendra9580.github.io/To-Do-List-App/",
        code: "https://github.com/satyendra9580/To-Do-List-App",
        description: "A To-Do List project involves developing an application where users can add, list, and remove tasks they need to complete, helping them organize and manage their daily activities efficiently. It is build React JS", 
        style: {
            shadow: "shadow-[#FFD43B]",
            cover: "from-[#FFD43B]",
            display: " hidden group-hover:flex"
        }
    },
    
]
export default ProjectsData;