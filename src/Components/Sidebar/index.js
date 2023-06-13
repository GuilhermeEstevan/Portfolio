import styled from 'styled-components'

export const SidebarContainer = styled.aside`

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
}
.show-sidebar {
    transform: translate(0);
    z-index: 999;
  }


.sidebar-header{
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
}

.logo{
    height: 2.5rem;
}

.close-btn{
    background: transparent;
    border: transparent;
    font-size: 2rem;
    color: #172554;
    /* color: var(--clr-red-light); */
    cursor: pointer;
}

.links{
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
}
.links li {
    margin: 1rem 0;
    font-size: 1.5rem;
}
.links li a{
    text-decoration: none;
    color: var(--clr-grey-4);
}



`