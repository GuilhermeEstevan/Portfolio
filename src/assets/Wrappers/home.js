import styled from 'styled-components'


export const Wrapper = styled.section`


height: 100vh;
width: 100%;
display: flex;
color: var(--clr-slate-11);
background-color: var(--clr-primary-1);
text-align: center;


.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}

.image-container{
    display: block;
    margin-bottom: 4.5rem;
  }

.image-container img{
    width: auto;
    height: 120px;
    opacity: 0.8;
    border-radius: 50%;
    border: 3px solid var(--clr-primary-4);
}


.content{
padding: 0 2rem;
max-width: 1000px;

.signature{
  font-family: "Great Vibes", cursive;
  font-size: 3rem;
}

.contrast{
  color: var(--clr-primary-6);
}

h4{
  padding-bottom: 1.2rem;

}

h2{
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

p{
  line-height: 1.2;
  max-width: 600px;

}

.about-btn{
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1rem;
  width: 130px;
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 1rem;
  background-color: var(--clr-primary-8);
  color: var(--clr-primary-2);
  transition: var(--transition);
} 

.about-btn:hover {
  background-color: var(--clr-primary-7);
  color: var(--clr-primary-4); 
}

} 

@media (min-width: 480px) {

  .image-container img{
  
    height: 200px;
}
}



@media (min-width: 768px){
  .image-container img{
 
    height: 200px;
}
}


@media (min-width: 992px) {


  
  .hero-content{
      width: 100%;
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      margin-top: -1rem;
      align-items: center;
      justify-content: space-around;
      text-align: start;
  }

  .content{
    h4{
  font-size: 1.2rem;
}

h2{
  font-size: 1.2rem;
 
}

  p{
  font-size: 1rem;
}

  }

.image-container{
    display: block;
    padding: 1rem;
}

.image-container img{
    width: auto;
    height: 200px;
}

}


@media (min-width: 1200px){
 
  .image-container img{
    width: auto;
    height: 250px;
}


.content{
padding: 0 2rem;
max-width: 1000px;


h4{
  padding-bottom: 1.2rem;
  font-size: 1.5rem;
}

h2{
  margin-bottom: 1rem;
  font-size: 1.5rem;
  span{
    font-size: 1.8rem;
  }
}

p{
  font-size: 1.2rem;
  line-height: 1.2;
  max-width: 600px;
}
} 


}

`



