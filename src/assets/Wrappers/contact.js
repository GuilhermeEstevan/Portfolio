import styled from "styled-components";

export const Wrapper = styled.div`
  .about-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .social-links {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
  }

  .social {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 2rem;
      color: var(--clr-primary-6);
    }

    .title {
      font-size: 1rem;
      font-weight: 600;
    }

    .info {
      margin-top: 2px;
      font-size: 0.8rem;
    }
  }

  .form-box {
    width: var(--fluid-width);
    max-width: var(--max-width);
    padding: 1rem 0;
  }

  .form-field {
    background: var(--clr-primary-2);
    border-radius: var(--radius);
    border: none;
  }

  .button {
    display: flex;
    color: #b0b4ba;
    background: var(--clr-primary-6);
    padding: 8px 2rem;
    border-radius: 2rem;
    transition: var(--transition);
    text-transform: capitalize;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
  }

  @media (min-width: 768px) {
    .social-links {
      flex-direction: row;
    }
  }

  @media (min-width: 962px) {
    .form-box {
      max-width: var(--max-width);
      width: 90%;
      margin: 0 auto;
    }

    .social {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      color: var(--clr-slate-11);

      a {
        text-decoration: none;
        font-size: 2rem;
        color: var(--clr-primary-6);
      }

      .title {
        font-size: 1.3rem;
        font-weight: 600;
      }

      .info {
        font-size: 1rem;
      }
    }
  }
`;
