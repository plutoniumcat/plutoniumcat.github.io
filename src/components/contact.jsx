import Obfuscate from 'react-obfuscate';

function Contact() {
    return (
        <section id="contact">
            <h1 className="aboutme">Contact</h1>
            <p>
                Contact me to discuss hiring or projects!
            </p>
            <Obfuscate email="alexandrialeemcpherson@gmail.com" aria-label="Email Me">
                <svg className='email-btn' width={24} height={21}>
                <path
                fill="#000"
                d="M12 12.713L.0 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5"
                />
                </svg>
            </Obfuscate>
        </section>
    )
}

export default Contact;