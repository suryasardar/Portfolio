import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code' />
          <p className='text-slate-600 mt-8 leading-loose'>
          In my journey to become a Full Stack Developer, I bring a blend of enthusiasm, fresh perspectives, and a hunger for continuous learning. Proficient in key technologies such as HTML, CSS, JavaScript, React, Node.js, and MySQL, I am equipped to contribute to both frontend and backend development. My goal is to not only contribute my technical skills but also to absorb knowledge and expertise from seasoned professionals, fostering a symbiotic relationship for mutual growth.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
