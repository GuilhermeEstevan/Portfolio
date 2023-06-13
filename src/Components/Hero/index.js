import styled from 'styled-components'
import backgroundImage from '../../assets/hero_bg.jpg'


export const HeroContainer = styled.section`

min-height: 95vh;
display: flex;
place-items: center;
position: relative;
color: var(--clr-grey-9);
text-align: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  .image-container{
    display: none;
  }

  .hero-content{
    margin: 0 3rem;
  }

.name{
    margin-bottom: 1.5rem;
    text-shadow: 3px 0px #fff;
}



.content h4{
    padding-bottom: 1.5rem;
    border-bottom: 2px inset var(--clr-primary-1);
}



@media (min-width: 992px) {

.image-container{
    display: block;
}
.image-container img{
    width: auto;
    height: 300px;
    opacity: 0.8;
    border-radius: 50%;
    border: 5px solid var(--clr-primary-1);
}


.hero-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}


  }





`



