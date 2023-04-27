function Contact() {
    return (
        <section id="contact">
            <h1 className="aboutme">Contact</h1>
            <p>
                Contact me to discuss hiring or projects!
            </p>
            <form action="submit" id="contact">
                <label htmlFor="name">Name or Organization:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" className="email" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <input className="submit-btn" type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default Contact;