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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .social {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

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

  .form-field {
    background: var(--clr-primary-2);
    border-radius: var(--radius);
 
  }

  .button {
    color: #b0b4ba;
    background: var(--clr-primary-6);
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .button:hover {
    color: #b0b4ba; 
    transform: scale(1.1);
    background: var(--clr-primary-6);
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }

`;
