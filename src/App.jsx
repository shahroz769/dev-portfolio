import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
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
}

export default App;
