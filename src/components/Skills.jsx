import Skill from '@components/Skill';
import '@components/css/Skills.css';

const Skills = () => {
    const skills = [
        { title: 'HTML', exp: '1.5 Years Experience' },
        { title: 'CSS', exp: '1.5 Years Experience' },
        { title: 'Javascript', exp: '1.5 Years Experience' },
        { title: 'Firebase', exp: '1.5 Years Experience' },
        { title: 'GSAP', exp: '1.5 Years Experience' },
        { title: 'ReactJS', exp: '1 Year Experience' },
        { title: 'NodeJS', exp: '1 Year Experience' },
        { title: 'ExpressJS', exp: '1 Year Experience' },
        { title: 'MongoDB', exp: '1 Year Experience' },
        { title: 'Framer-Motion', exp: '6 Months Experience' },
    ];
    return (
        <div className='skills-container'>
            {skills.map((skill, ind) => (
                <Skill key={ind} title={skill.title} exp={skill.exp} />
            ))}
        </div>
    );
};

export default Skills;
