import styled from 'styled-components'


export const ProjectsContainer = styled.section`

/* height: 80vh; */
background: #181818;
color: var(--clr-grey-9);

.title{
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.title h2 {
    padding-bottom: 0.5rem;  
}
.underline{
    width: 8rem;
    height: 2px;
    background: var(--clr-primary-1);
    transition: var(--transition);
}
.title:hover{

    .underline{
        width: 14rem;
    }
}


.projects-container{
    display: grid;
    place-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 4rem 0;
}

.project-box{
    transition:var(--transition) ;
}

.image{
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
}
.project-box .image img{
    height: 150px;
    width: 220px;
}


.subtitle{
    text-align: center;
    color: var(--clr-grey-9);
    padding: 1rem 0;
}




@media (min-width: 576px) {


.project-box .image img{
    height: 250px;
    width: 320px;
}
.projects-container{
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.project-box:hover {
    transition:var(--transition) ;
    transform: scale(1.1);
}


}

`