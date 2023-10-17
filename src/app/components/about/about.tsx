import Image from 'next/image'
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
            <h2 className="section-title"> About Me</h2>
            <hr></hr>
            <p>Hello, I&apos;m Tiago, a dedicated programmer with three years of experience in the tech industry. I'm passionate about coding and creating solutions that make a difference.</p>
            <p>My journey in programming in 2018 when I first started to write JavaScript and Python scrips. I had just finished law school when got really curious about programming.</p>
        </div>
    </div>
}