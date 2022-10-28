import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState ({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regex_name = /^[a-zA-Z ]{2,30}$/

        if(!values.name) 
            errors.name = "You must enter a name"
        
        else if(!regex_name.test(values.name)) 
            errors.name = "You must enter a valid name, minimum 2 characters and only letters"

        if(!values.email)
            errors.email = "You must enter a email adress"
            
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid email adress (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
            
        else if(values.comment.length <5)
            errors.comment = "Your comment must be longer than 5 characters"

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else 
            setSubmitted(false)

        return errors;
    }

  const handleChange = (e) => {
      const {id, value} = e.target
      setContactForm({...contactForm, [id]: value}) //... = spread operator
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(contactForm))
  }

  const handleKeyUp = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
        setSubmitted(false)  
  }

  return (
    <section className="contact-form">
        <div className="container">
            {
                submitted ? 
                (<div className="alert alert-success text-center mb-5" role="alert" display="flex">
                    <h3>Thank you for your comment!</h3>
                    <h5>We will contact you in 48 hours</h5>
                </div>)
                :
                (
                    <>
                        <h2>Come in Contact with Us</h2>
                        {/* <pre>{JSON.stringify(formErrors) }</pre> */}
                        <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <input id="name"  type="text"  className={(formErrors.name ? 'error': '')} onKeyUp={handleKeyUp} placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>
                            <div>
                                <input id="email" type="email" className={(formErrors.email ? 'error': '')}  onKeyUp={handleKeyUp} placeholder="Your email" value={contactForm.email} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.email}</div>
                            </div>
                            <div className="textarea">
                                <textarea id="comment" className={(formErrors.comment ? 'error': '')} onKeyUp={handleKeyUp} placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                                <div className="errorMessage">{formErrors.comment}</div>
                            </div>
                            <div className="formBtn">
                              <button type="submit" className="btn-theme"> Post Comments</button>
                            </div>
                        </form>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactFormSection