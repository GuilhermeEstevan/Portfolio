import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--clr-primary-1);
  }
  .dashboard-page {
    margin: 0 auto;
    min-height: 100vh ; 
    position: relative;
  }

  .toggle-btn{
    position: absolute;
    font-size: 2rem;
    top: 2%;
    left: 5%;
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
