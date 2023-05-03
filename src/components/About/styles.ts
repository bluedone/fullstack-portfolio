import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .skill{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
      flex-direction: column;

    }
  }
  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 100%;
     filter: grayscale(1);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }
  
  .cube {
    width: 40%;
    height: 67%;
    top: 0;
    right: 3%;
    margin-left: 0;
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    @include breakpoint(md) {
      top: 42%;
      justify-content: flex-start;
      width: 100%;
    }

    .cubespinner {
      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 12s;
      transform-style: preserve-3d;
      transform-origin: 100px 100px 0;
      margin-left: calc(50% - 100px);

      div {
        position: absolute;
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0;
      }

      .face1 {
        transform: translateZ(150px);
      }
      .face2 {
        transform: rotateY(90deg) translateZ(150px);
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(150px);
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(150px);
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(150px);
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(150px);
      }
    }

    @keyframes spincube {
      from,
      to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        transform: rotateY(-90deg);
      }
      33% {
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        transform: rotateY(-270deg) rotateZ(90deg);
      }
      83% {
        transform: rotateX(90deg);
      }
    }
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-image{
      display: flex;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }

`