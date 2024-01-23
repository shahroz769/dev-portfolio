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
            project: "https://devslinks.vercel.app/",
            code: "https://github.com/shahroz769/link-sharing-app",
            techs: "REACT NODE EXPRESS FRAMER-MOTION",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "INVOICE WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/invoice_eevvd4.jpg",
            project: "https://devv-invoice.vercel.app/",
            code: "https://github.com/shahroz769/invoice-app",
            techs: "REACT NODE EXPRESS FRAMER-MOTION",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "TIC TAC TOE GAME",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/tic_tac_toe_vgtt6o.jpg",
            project: "https://shahroz769.github.io/tic-tac-toe",
            code: "https://github.com/shahroz769/tic-tac-toe",
            techs: "HTML CSS JAVASCRIPT GSAP",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "DICTIONARY WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dictionary_o9t5aa.jpg",
            project: "https://shahroz769.github.io/dictionary-web-app",
            code: "https://github.com/shahroz769/dictionary-web-app",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "DEV FINDER WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dev_finder_vbmeid.jpg",
            project: "https://shahroz769.github.io/Github-Devfinder",
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
            project: "https://shahroz769.github.io/Planets-website",
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
            project: "https://shahroz769.github.io/BMI-Calculator",
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
            project: "https://shahroz769.github.io/random-password-generator",
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
            project: "https://shahroz769.github.io/age-calculator",
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
