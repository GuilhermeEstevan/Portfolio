import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--clr-primary-1);
    position: relative;

  }

.container{
  overflow: hidden;
}
  
  .dashboard-page {
    margin: 0 auto;
    min-height: 100vh; 
    min-height: 100vh; 
    position: relative;
    color: var(--clr-slate-12);
    animation: slideMe .6s ease-in;

  }

@keyframes slideMe {
  0%{
    transform: translatey(500px);
  }
  100%{
    transform: translateY(0);
  }
}



  
  .toggle-btn{
    position: absolute;
    font-size: 2rem;
    top: 1%;
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
