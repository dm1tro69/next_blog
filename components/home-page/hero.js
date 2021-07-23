import classes from './hero.module.css'
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src={'/images/site/user.jpg'}
                    height={300} width={300}
                    alt={'img'}
                    />
            </div>
            <h1>Hi, I'm Dmytro</h1>
            <p>I blog about web development - especially frontend frameworks like Angular or React</p>
        </section>
    );
};

export default Hero;
