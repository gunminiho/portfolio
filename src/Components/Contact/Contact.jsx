import './Contact.css'
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="section-intro">
                    <div>
                        <h5>CONTACT</h5>
                        <h1>I'd Love To Hear From You.</h1>
                        <p className="lead">I will be happy to answer any questions you may have for me!</p>
                    </div>
                </div>

                <form action="https://getform.io/f/4e901050-5c86-4d26-ba35-9a32751501b1" method="POST">
                    <label>Name</label><input type="text" name="name" required />
                    <label>Email</label><input type="email" name="email" required />
                    <label>Phone</label><input type="text" name="phone" required />
                    <label>Message</label><textarea name="message" rows="10" cols="30" required />
                    <button type="submit">Send</button>
                </form>

                <div className="contact-info">
                    <div className='info'>
                        <a href="https://www.linkedin.com/in/gunminiho" className='linkedin-icon'>
                            <FaLinkedinIn />
                        </a>
                        <h5>Where to find me</h5>
                    </div>

                    <div className='info'>
                        <a href="https://www.linkedin.com/in/gunminiho" className='linkedin-icon'>
                            <MdEmail />
                        </a>
                        <h5>Email Me At</h5>
                    </div>

                    <div className='info'>
                        <a href="https://www.linkedin.com/in/gunminiho" className='linkedin-icon'>
                            <FaPhone />
                        </a>
                        <h5>Call Me At</h5>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;

/*
<form action="https://getform.io/f/70822cf8-bafa-4698-9822-46d4eb9a7e87" method="POST">
                    <div className="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" minLength={2} required />
                    </div>
                    <div className="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" />
                    </div>
                    <div className="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required></textarea>
                    </div>
                    <button className="submitform">SUBMIT</button>
                </form>


 
                  
                    <input type="hidden" name="_gotcha" style="display:none !important" />
                    <input type="checkbox" name="subscribe" value="yes" checked />
                    <input type="hidden" name="subscribe" value="no" />
                    <input type="radio" name="gender" value="male" checked />
                    <input type="radio" name="gender" value="female" />
                    <input type="radio" name="gender" value="other" />
                    <select name="work-experience">
                        <option value="one-year">0-1 years</option>
                        <option value="one-five-years">1-5 years</option>
                    </select>


*/