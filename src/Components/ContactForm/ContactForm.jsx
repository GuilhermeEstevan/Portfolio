import { useState } from 'react';
import { useForm } from '@formspree/react';
import { ContactFormContainer } from './index';
import { toast } from 'react-toastify'


const ContactForm = () => {

  const [state, handleSubmit] = useForm('xknadrwy')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccessNotificationVisible, setIsSuccessNotificationVisible] = useState(false)


  const handleEmail = (e) => {
    setEmail(e.target.value)
    setIsSuccessNotificationVisible(false)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
    setIsSuccessNotificationVisible(false)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setEmail('');
    setMessage('');
    setIsSuccessNotificationVisible(true)
  };




  if (state.succeeded && isSuccessNotificationVisible) {
    toast.success('Mensagem enviada com sucesso!');
  }


  return (
    <ContactFormContainer>
      <form
        onSubmit={handleFormSubmit} >
        <p>Gostaria de me enviar um Email?</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmail} />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={handleMessage}>
        </textarea>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Enviando...' : 'Enviar'}
        </button>

      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
