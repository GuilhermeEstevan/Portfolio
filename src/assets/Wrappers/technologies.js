import styled from "styled-components";

export const Wrapper = styled.section`
  .technologies {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .technologies-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    padding: 1rem 0;
  }

  .technology {
    /* background: #d9e4e8; */
    background: var(--clr-primary-2);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 3rem;
    cursor: pointer;
    transition: var(--transition);
    /* z-index: 2000; */

    img {
      width: 50px;
      transition: var(--transition);
    }
  }

  @media (min-width: 962px) {
    .technology:hover {
      box-shadow: 0 0 0 4px var(--clr-primary-4);

      img {
        transform: scale(1.2);
      }
    }

    .technologies-container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
    .technology {
      padding: 2rem 4rem;

      img {
        width: 90px;
        transition: var(--transition);
      }
    }
  }

  @media (min-width: 1200px) {
    .technologies-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
