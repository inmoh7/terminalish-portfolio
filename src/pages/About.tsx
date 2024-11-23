import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <div>
      <h1 className="text-center text-xl mt-2">About Me</h1>
      <div className="text-center my-2 px-2">
        I'm Infas. A passionate frontend focused full-stack developer from the
        beautiful island 🇱🇰. My current tech stack is ReactJs/NextJs, VueJs,
        ExpressJs and PHP. I have over 2 years of working experience in
        full-stack development including Laravel, Symfony, Django and VueJs. I'm
        familiar with programming languages like Typescript, PHP and Python. I'm
        self motivated person with passion to aquire new skills whenever
        possible. I like creating beautiful websites with stunnig UI. Apart from
        programming I like gaming and watching football.
      </div>
      <div className="flex gap-8 justify-center items-center mt-4">
        <div className="flex items-center justify-center gap-1 hover:scale-105">
          <FaGithub />
          <a
            className="underline "
            href={`https://github.com/${import.meta.env.VITE_USERNAME}`}
          >
            Github
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 hover:scale-105">
          <FaLinkedin />
          <a
            className="underline "
            href={`https://www.linkedin.com/in/${
              import.meta.env.VITE_USERNAME
            }`}
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 hover:scale-105">
          <MdEmail />
          <a
            className="underline "
            href={`mailto:${import.meta.env.VITE_EMAIL}`}
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
