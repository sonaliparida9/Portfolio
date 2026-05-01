import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'
import axios from 'axios'

export function Form() {
  const [state] = useForm('xknkpqry')
  const [emailAddress, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')
  const [submit, setSubmit] = useState(false);

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
      setEmail(email)
    } else {
      setValidEmail(false)
    }
  }

  async function submitForm(event: React.FormEvent) {
    event.preventDefault()
    setSubmit(true); // Disable the button after form submission

    if (!validEmail || !message || !isHuman) {
      setSubmit(false); // Re-enable the button if validation fails
      return
    }

    try {
      const response = await axios.post('http://localhost:3003/api/contact', {
        email: emailAddress,
        message: message,
      })

      if (response.status === 200) {
        setSubmit(false);
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
      } else {
        toast.error('Failed to send email. Please try again later.', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'failed',
        })
        setSubmit(false); // Re-enable the button if the request fails
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again later.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      })
      setSubmit(false); // Re-enable the button if an error occurs
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
      setSubmit(false); // Re-enable the button if the email is successfully sent
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={submitForm}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LdaBxsqAAAAAF9Kfnsit_9-ltFQV-uhUkYxvm1e"
          onChange={() => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          disabled={submit || !validEmail || !message || !isHuman} // Disable the button based on the submit state
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}

