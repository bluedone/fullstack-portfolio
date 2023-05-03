import { Container } from "./styles";
import { useForm, ValidationError } from '@formspree/react';

export function Form(){


  const [state, handleSubmit] = useForm("myyozglw");
  
  return(
    <Container>
      <h2>Get in touch using the form below.</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          placeholder="Leave your message"
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          To send
        </button>
    </form>
    </Container>
  )
}