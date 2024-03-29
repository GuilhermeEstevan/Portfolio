import styled from "styled-components";

export const Wrapper = styled.section`
  .projects {
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-box {
    transition: var(--transition);
  }

  .project-box:hover {
    transform: scale(1.05);
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .container {
    border: 8px solid var(--clr-slate-8);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    background: var(--clr-slate-4);
  }

  img {
    width: 280px;
    height: 200px;
  }

  .project-info {
    flex-grow: 1;
    margin-top: 4px;
    border-top: 3px solid var(--clr-slate-8);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    span {
      font-weight: 700;
      font-family: "Poppins", sans-serif;
    }

    .github {
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: inherit;
      }
    }
  }

  @media (min-width: 1200px) {
    .projects-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    img {
    width: 320px;
    height: 240px;
  }

  }
`;
