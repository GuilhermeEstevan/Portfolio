import styled from 'styled-components'


export const ContactFormContainer = styled.div`

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--clr-grey-7);
  padding: 2.5rem 2.5rem 0 2.5rem;
  margin: 0.5rem;
  position: relative;
  z-index: 1;
}



p{
    font-size: 1rem;
    color: var(--clr-grey-7);
}

label{
    font-size: 1rem;
    padding: 0.5rem 0;
}

#email,
#message {
    height: 2rem;
    font-size: 0.8rem;
    width: 15rem;
    padding: 0.2rem;
    border: none;
    border-radius: var(--radius);
    outline: none;
}

#message{
    height: 5rem;
}

button {
    margin: 1.5rem 0;
    border-radius: var(--radius);
    border: none;
    border-radius: var(--radius);
    background-color: #181818;
    color: var(--clr-grey-7);
    padding: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    cursor: pointer;
    transition: var(--transition);
}
button:hover{
  transition: var(--transition);
  color: var(--clr-white);
}







@media (min-width: 680px) {

#email,
#message {
    height: 2.5rem;
    font-size: 1rem;
    width: 25rem;
}

#message{
    height: 5rem;
}

form{
  margin: 1.5rem;
}

form:before,
form:after {
  content: "";
  position: absolute;
  border: 7px solid #181818;
  
}

form:before {
  top: 0;
  left: 0;
  width: 40%;
  height: 40%;
  border-right: none;
  border-bottom: none;
}

form:after {
  bottom: 0;
  right: 0;
  width: 40%;
  height: 40%;
  border-left: none;
  border-top: none;
}

button{
  padding: 1rem;
}







}



`