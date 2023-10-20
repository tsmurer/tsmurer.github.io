import './about.scss';

export default function About() {
  return (
    <div className="about__container">
      <div className="about__container__image">
        <img src="/profPic.jpeg" alt="profilePicture" />
      </div>
      <div className="about__container__text">
        <h1>Hello, I&apos;m Tiago</h1>
        <div className="scrollable-content">
          <p>I&apos;m a passionate programmer with three years of experience in web development.</p>
          <p>My journey into programming began in 2018, and I quickly fell in love with creating solutions that make a difference.</p>
          <p>With a strong foundation in JavaScript and Python, I&apos;ve contributed to innovative projects, tackled complex challenges, and delivered user-friendly interfaces.</p>
          <p>I&apos;m eager to take on new opportunities to expand my skills and make a positive impact.</p>
          <p>If you&apos;re looking for a dedicated and enthusiastic programmer to join your team, let&apos;s connect and discuss how I can contribute to your projects.</p>
        </div>
      </div>
    </div>
  );
}