import styled from 'styled-components'


export const FooterContainer = styled.footer`


background: var(--clr-primary-1);
color: var(--clr-grey-9);

.title{
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}


.contact-container{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.links{
    margin: 1rem 0;
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
}

.links a{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.links span{
    font-size: 1.7rem;  
    color: #181818;
}

.links p {
    color: var(--clr-grey-7);
    font-size: 1rem;
}


@media (min-width: 992px) {

.contact-container{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;

}
    
.links{
    margin: 3rem;
}

.links span{
    font-size: 2.5rem;
}







}

`