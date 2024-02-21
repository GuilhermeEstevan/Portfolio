import styled from "styled-components";

export const Wrapper = styled.nav`
  display: none;
  width: 20rem;
  height: 100vh;
  align-items: center;
  background: #d9e4e8;
  color: var(--clr-slate-8);
  border-right: 2px solid var(--clr-slate-7);
  box-shadow: var(--shadow-3);
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1000;

  .nav-center {
    height: 70%;
    display: flex;
    flex-direction: column;
  }

  .nav-content {
    height: 100%;
  }

  .nav-header {
    margin-top: 2rem;
    padding: 1rem;
    font-size: 1.2rem;
  }
  img {
    margin-top: -2rem;
    width: 420px;
    height: 420px;
  }

  .nav-links {
    height: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    transition: var(--transition);

    li {
      display: flex;
      align-items: center;
      transition: var(--transition);
    }

    li:hover {
      transform: scale(1.2);
    }

    .nav-link {
      display: flex;
      align-items: center;
      font-weight: 600;
      color: var(--clr-slate-10);
      letter-spacing: 0.2rem;
      padding: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      gap: 8px;
    }

    span {
      font-size: 1.2rem;
      display: flex;
      margin-right: 3px;
    }
  }

  .social-links {
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    gap: 2.5rem;

    a {
      color: var(--clr-slate-8);
    }
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;

    .nav-toggle {
      display: none;
    }
  }
`;
