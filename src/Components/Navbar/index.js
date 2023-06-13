import styled from "styled-components"

export const NavContainer = styled.nav`

height: 5rem;
display: flex;
align-items: center;
justify-content: center;
background: var(--clr-primary-1);

.nav-center{
    width: 90vw;
    max-width: var(--max-width);
}

.nav-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo img{
    height: 2.5rem;
}

.nav-toggle{
    background: transparent;
    border: transparent;
    color: var(--clr-grey-8);
    font-size: 2.5rem;
    cursor: pointer;
    transition: var(--transition);
}
.nav-toggle:hover{
transform: scale(1.2);
}

.nav-links{
  display: none;
  transition: var(--transition);
}


@media (min-width: 992px) {

.nav-toggle{
    display: none;
}

.nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-links{
display: flex;
justify-content: center;

li{
    margin: 0 1rem;
    transition: var(--transition);
}
a{
text-decoration: none;
color: var(--clr-grey-8);
letter-spacing: 0.2rem;
padding: 0.5rem;
text-transform: capitalize;
transition: var(--transition);
}
li:hover{
    transform: scale(1.2);
}



}






}




















`