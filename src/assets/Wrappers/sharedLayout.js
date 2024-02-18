import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--clr-primary-1);
    position: relative;
    /* overflow: hidden; */
  }
  .dashboard-page {
    margin: 0 auto;
    min-height: 100vh; 
    position: relative;
    color: var(--clr-slate-12);
    animation: slideMe .6s ease-in;
  }

@keyframes slideMe {
  0%{
    transform: translatey(600px);
  }
  100%{
    transform: skew(0deg);
  }
}

  .toggle-btn{
    position: absolute;
    font-size: 2rem;
    top: 1%;
    right: 5%;
    color: var(--clr-slate-9);
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .toggle-btn{
      display: none;
    }
    
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`;
export default Wrapper;
