import styled from "styled-components";

const CardStyled = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f5f5f5;
  padding-top: 5%;
  padding-bottom: 5%;
  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  .card-header {
    background-color: #f4f6fa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 6%;
    padding-right: 6%;
    border-radius: 10px 10px 0 0;
    @media (min-width: 900px) {
      padding-top: 0;
      padding-bottom: 0;
    }
    h1 {
      font-size: 1.3rem;
      text-align: left;
      max-width: 60%;
      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }
    button {
      margin: 0;
      color: #fff;
      background-color: #358efd;
      padding-top: 0.5%;
      padding-bottom: 0.5%;
      padding-left: 4%;
      padding-right: 4%;
      font-size: 1.3rem;
      margin-right: 3%;
      border: none;
      border-radius: 10px;
      padding-top: 3%;
      padding-bottom: 3%;
      @media (min-width: 900px) {
        padding-top: 1%;
        padding-bottom: 1%;
      }
    }
    button:hover {
      background-color: #fff;
      transition: 0.3s;
      cursor: pointer;
      color: #1f2937;
    }
  }
  .card-body {
    background-color: #edeff3;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 0 0 10px 10px;
    @media (min-width: 900px) {
      padding-right: 5%;
      padding-left: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10%;
    }
    img {
      max-width: 235px;
      width: 100%;
      height: 100%;
      max-height: 235px;
      border-radius: 10px;
      object-fit: cover;
      @media (min-width: 900px) {
        max-width: 300px;
        max-height: 300px;
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5%;
      @media (min-width: 900px) {
        margin-top: 0;
      }
      span {
        text-align: left;
        padding-left: 10%;
        font-weight: bold;
        color: #1f2937;
        @media (min-width: 900px) {
          font-size: 1.5rem;
          padding-left: 5%;
        }
      }
      button {
        padding-right: 10%;
        @media (min-width: 900px) {
          font-size: 1rem;
          padding-right: 5%;
        }
      }
    }
    &__data {
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      gap: 2%;
      @media (min-width: 900px) {
        background-color: #fff;
        margin-top: 3%;
        margin-left: 0;
        width: 100%;
        border-radius: 10px;
        padding-left: 5%;
        padding-top: 5%;
        padding-bottom: 5%;
      }
      p,
      a {
        font-size: 0.9rem;
        text-align: left;
        display: block;
        inline-size: 200px;
        overflow-wrap: break-word;
        @media (min-width: 900px) {
          inline-size: 400px;
          font-size: 1rem;
        }
      }
      .sector-service {
        color: #358efd;
        display: block;
      }
    }
  }
  .card-body-info-container {
    @media (min-width: 900px) {
      max-width: 500px;
      width: 100%;
    }
  }
`;

export default CardStyled;
