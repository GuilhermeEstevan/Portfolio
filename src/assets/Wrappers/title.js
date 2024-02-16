import styled from 'styled-components'

export const Wrapper = styled.div`

.title{
    text-align: start;
    text-transform: capitalize;
    position: relative;
    width: 200px;
}
.title h2{
    font-family: "Poppins", sans-serif;
    padding: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    position: relative
}

.title h2::before,
.title h2::after {
  content: '';
  position: absolute;
  width: 15%; 
  height: 1px; 
  background-color: var(--clr-primary-8); 
}

.title h2::before {
  top: 90%;
  left: 15%; 
  transform: translateY(-50%);
}

.title h2::after {
    
  bottom: 20%; 
  left: 15%; 
  width: 30%;
}



`

