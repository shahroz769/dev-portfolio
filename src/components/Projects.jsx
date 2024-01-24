import Project from "@components/Project";
import "@components/css/Projects.css";
import { useContext } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";

const Projects = () => {
    const projects = [
        {
            title: "LINKS SHARING WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/links_dqmjdk.jpg",
            project: "https://devslinks.vercel.app",
            code: "https://github.com/shahroz769/link-sharing-app",
            techs: "REACT NODE EXPRESS FRAMER-MOTION",
            shortDescription:
                "Create, organize, and share multiple links with anyone hassle-free. Drag-and-drop support to reorder links, mobile previews, and profile customization for a personalized experience.",
            longDescription:
                "Link-sharing app is a platform enabling users to create, organize, and share multiple links with anyone. The app is built using React for frontend, and Node.js, Express.js, and MongoDB on the backend. Users can see mobile mockup previews while creating links. It features drag-and-drop functionality for link reordering, validation checks for link submissions, and the ability to customize profiles with details like pictures, names, and emails. Frame motion is used to smoothly animate between pages.",
        },
        {
            title: "INVOICE WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/invoice_eevvd4.jpg",
            project: "https://devv-invoice.vercel.app",
            code: "https://github.com/shahroz769/invoice-app",
            techs: "REACT NODE EXPRESS FRAMER-MOTION",
            shortDescription:
                "Effortlessly manage invoices. Create, edit, search, and filter invoices by status. Save drafts and mark pending invoices as paid.",
            longDescription:
                "Invoice app is a full-stack app made for seamless invoice management. With React on frontend and backend using Node.js, Express.js, and MongoDB, users can efficiently create, edit, and delete invoices. Framer Motion animations enhance the user experience with smooth animations. Users can save invoices as drafts, mark pending invoices as paid, and filter invoices based on status (draft/pending/paid) or search invoice by invoice number. Form validations ensure accuracy during invoice creation and editing. ",
        },
        {
            title: "TIC TAC TOE GAME",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/tic_tac_toe_vgtt6o.jpg",
            project: "https://devs-tictactoe.vercel.app",
            code: "https://github.com/shahroz769/tic-tac-toe",
            techs: "HTML CSS JAVASCRIPT GSAP",
            shortDescription:
                "A classic 2-player Tic Tac Toe game. Choose your mark, track wins and ties, and experience enhanced gameplay with smooth animations.",
            longDescription:
                "A 2-player Tic Tac Toe game built using HTML, CSS, and JavaScript, offering a classic gaming experience. Players can choose their preferred marks, engage in matches, and keep track of victories and ties through a counter. Animations are incorporated using the GSAP JavaScript Library, bringing engaging dimension to the user interface.",
        },
        {
            title: "DICTIONARY WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dictionary_o9t5aa.jpg",
            project: "https://devs-dictionary.vercel.app",
            code: "https://github.com/shahroz769/dictionary-web-app",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "Explore the world of words with this Dictionary App. Search, listen, and customize your experience with font choices and light/dark modes.",
            longDescription:
                "Dictionary Web App is a comprehensive tool for word enthusiasts. Using the Free Dictionary API, users can seamlessly search for words and access detailed responses. Enrich your vocabulary by listening to word pronunciations when available. Reading experience can be customized by switching between serif, sans serif, and monospace fonts or by switching to preferred color theme (light/dark). The app ensures an optimal layout, adapting seamlessly to your device's screen size.",
        },
        {
            title: "DEV FINDER WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dev_finder_vbmeid.jpg",
            project: "https://devs-devfinder.vercel.app",
            code: "https://github.com/shahroz769/Github-Devfinder",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "PLANETS WEBSITE",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946706/Portfolio%20Projects/planets_f29f2r.jpg",
            project: "https://devs-planets.vercel.app",
            code: "https://github.com/shahroz769/Planets-website",
            techs: "HTML CSS JAVASCRIPT GSAP",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "BMI CALCULATOR WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/bmi_uw2ush.jpg",
            project: "https://devs-bmicalculator.vercel.app",
            code: "https://github.com/shahroz769/BMI-Calculator",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "PASSWORD GENERATOR WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/password_generator_zsm7dz.jpg",
            project: "https://devs-passwordgenerator.vercel.app",
            code: "https://github.com/shahroz769/random-password-generator",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "AGE CALCULATOR WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/age_rkhg21.jpg",
            project: "https://devs-agecalculator.vercel.app",
            code: "https://github.com/shahroz769/age-calculator",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
    ];
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <div className="projects-container">
            <div className="header">
                <Reveal>
                    <h1
                        onMouseEnter={() => mouseEnterHandler("large")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Projects.
                    </h1>
                </Reveal>
            </div>
            <div className="body">
                {projects.map((project, ind) => (
                    <Project
                        key={ind}
                        img={project.img}
                        title={project.title}
                        techs={project.techs}
                        project={project.project}
                        code={project.code}
                        shortDescription={project.shortDescription}
                        longDescription={project.longDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
