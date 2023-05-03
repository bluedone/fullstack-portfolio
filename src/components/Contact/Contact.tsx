import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>contact me</h2>
        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:joaotuliosoares@hotmail.com">marciajwing@gmail.com</a>
        </div>
        {/* <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">+65 4337 2751</a>
        </div>   */}
      </div>
      <Form></Form>
    </Container>
  )
}