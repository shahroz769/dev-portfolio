import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

const Home = () => {
    return (
        <>
            <main>
                <Navbar profileImageBoolean="true" />
                <Hero />
                <Skills />
                <Projects />
            </main>
            <footer>
                <div>
                    <Contact />
                    <div className="nav-bottom">
                        <Navbar bottom="2.5rem" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
