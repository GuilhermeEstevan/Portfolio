import styled from "styled-components"

export const Wrapper = styled.nav`


display: none;
width: 20rem;
height: 100vh;
position: relative;
align-items: center;
background: var(--clr-primary-2);
color: var(--clr-slate-8);
border-right: 1px solid var(--clr-slate-2);
box-shadow: var(--shadow-3);
justify-content: space-around;


.nav-center{
   height: 70%;
   display: flex;
   flex-direction: column;
}

.nav-content{
  height: 100%;
}

.nav-header{

    margin-top: 2rem;
    padding: 1rem;
    font-size: 1.2rem;
}
 img{
  margin-top: -2rem;
  width: 420px;
  height: 420px;

 }


.nav-links{
    height: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    transition: var(--transition);

  li{
    display: flex;
    align-items: center;
    margin: 0 1rem;
    transition: var(--transition);
  } 

  li:hover{
    transform: scale(1.2);
}

  a{
    text-decoration: none;
    font-weight: 600;
    color: var(--clr-slate-10);
    letter-spacing: 0.2rem;
    padding: 0.5rem;
    text-transform: capitalize;
    transition: var(--transition);
}


  span{
    font-size: 1.2rem;
    display: flex;
    margin-right: 3px;
  }
  
}

.social-links{
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  gap: 2.5rem;


  a{
    color: var(--clr-slate-8);
  }
  
}


@media (min-width: 992px) {

 display: flex;
 flex-direction: column;

.nav-toggle{
  display: none;
}


}


`