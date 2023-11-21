import styled from 'styled-components'

export const AboutContainer = styled.section`

/* clr-primary-2 */
background: var(--clr-primary-1);
/* height: 40vh; */
color: var(--clr-grey-9);

.title{
    text-align: center;
    text-transform: capitalize;
}
.title h2{
    padding: 2rem;
}

.image-container{
    display: none;
}


.content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-text{
    text-align: center;
    line-height: 1.7rem;
    padding: 3rem 0;
}
.about-text p{
    color: var(--clr-grey-9);
    font-weight: 200;
}

.knowledges{
    width: 100%;
    max-width: 600px;
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
    gap: 1rem;
    padding: 1rem;
    
}

.knowledges button{
    padding: 1rem;
    margin: 2 0.5rem;
    border-radius: 2rem;
    border: transparent;
    font-weight: 700;
    /* background: var(--clr-grey-9); */
    background: #181818;
    color: var(--clr-grey-9);
    max-width: 130px;
    border: 1px solid transparent;
    transition: 0.3s ease-in-out all;
    text-align: center;
}

.knowledges button:hover{
    border-color: var(--clr-grey-9);
    transform: scale(1.2);
}

@media (min-width: 992px) {
.about-content{
    display: flex;  
    width: 100%;
}
.image-container{
    display: block;
}
.image-container img {
    width: 30rem;
    height: auto;
    padding: 2rem;
    margin-top: 4rem;
}

.about-text{
    max-width: 70%;
    text-align: justify;
}
}


`