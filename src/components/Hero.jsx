import profileImage from '../assets/chuck.png';
import Link from './Link';

const Hero = () => {
  return (
    <section className="hero divider">
        <div className="image">
            <img src={profileImage} alt="Photo of Chuck" />
        </div>
        <div>
            <h1>Chuck Bartowski</h1>
            <p>Full-Stack Web Developer</p>
            <p>Burbank, California</p>
            <Link href="#projects">Check out my work!</Link>
        </div>
    </section>
  );
};

export default Hero