import './about.scss'

export default function about() {
    return <div className="about__container">
        <div className="about__container__image">
            <img
                 src="/profPic.jpeg"
                 alt="profilePicture"
            />
        </div>
        <div className="about__container__text">
            <p>Hello, I&apos;m Tiago, a dedicated programmer with three years of experience in the tech industry. I&apos;m passionate about coding and creating solutions that make a difference.</p>
            <p>My journey in programming in 2018 when I first started to write JavaScript and Python scripts. I had just finished law school when got really curious about programming after bumping into Khan Academy&apos;s content on programming.</p>
            <p>Since then, I finished a new graduation at the Sao Paulo&apos;s Federal Institute of Education, Science and Technology, and I'm on my third job as a software developer, at Tata Consultancy Services.</p>

        </div>
    </div>
}