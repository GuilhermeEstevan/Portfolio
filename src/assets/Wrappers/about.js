import styled from 'styled-components'

export const Wrapper = styled.section`


color: var(--clr-slate-12);



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

h2{
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.contrast{
  color: var(--clr-primary-6);
}

.about-text p{
    color: var(--clr-grey-9);
    font-weight: 200;
}



@media (min-width: 992px) {
.about-content{
    display: flex;  
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.image-container{
    display: block;
}
.image-container img {
    width: 25rem;
    height: auto;
    padding: 2rem;

}

/* .animation{
    width: 300px;
    height: 300px;
    margin-top: -2rem;
} */

.about-text{
    max-width: 70%;
    text-align: justify;
}
}


`