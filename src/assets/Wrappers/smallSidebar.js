import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: #d9e4e8;
    width: 100vw;
    height: 100vh;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 240px;
      height: 220px;
      margin-top: -3rem;
    }
  }

  .nav-toggle {
    position: absolute;
    top: 5%;
    right: 5%;
    background: transparent;
    border: transparent;
    color: var(--clr-slate-8);
    font-size: 2.5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .nav-toggle:hover {
    transform: scale(1.2) rotate(360deg);
  }

  .nav-links {
    margin-top: -1rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    color: var(--clr-slate-8);
    transition: var(--transition);

    li {
      width: 200px;
      border: 1px solid var(--clr-slate-11);
      padding: 3px;
      border-radius: var(--radius);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      transition: var(--transition);
      text-decoration: none;
      color: var(--clr-slate-10);
      letter-spacing: 0.2rem;
      padding: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      gap: 8px;
    }

    li:hover {
      transform: scale(1.2);
    }

    .icon {
    }

    .text {
      font-weight: 600;
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
`;
export default Wrapper;
