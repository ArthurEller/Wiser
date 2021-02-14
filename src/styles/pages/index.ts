import styled from 'styled-components';
import womanBackground from '../../assets/womanBackground.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #faf5ff;

  @media (max-width: 525px) {
    background-color: transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 10vw;
  place-content: center;
  width: 100%;
  max-width: 50%;

  form {
    margin-top: 43px;
    margin-bottom: 32px;
    width: 256px;
    text-align: left;

    section {
      display: flex;
      width: 256px;

      flex-direction: column;
      align-items: left;

      h1 {
        font-size: 40px;
        margin-bottom: 16px;
        color: #383e71;

        font-weight: 400;
        line-height: 48px;
      }

      h3 {
        font-size: 16px;
        color: #989fdb;
        line-height: 20px;
        margin-bottom: 43px;
      }
    }

    p {
      color: #383e71;
    }
  }

  div {
    text-align: center;
    width: 256px;

    p {
      font-size: 14px;
      line-height: 20px;
      color: #989fbd;

      a {
        color: #9626ac;
        cursor: pointer;

        text-decoration: underline;
      }
    }
  }

  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    padding: 0px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 139px 32px 13px;
      margin-bottom: 50px;
      border-radius: 8px;

      width: 311px;
      height: 372px;

      background-color: #faf5ff;
      position: relative;

      section {
        display: flex;

        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        margin-top: 24px;

        h1 {
          font-size: 24px;
          margin-bottom: 16px;
          color: #383e71;

          font-weight: 400;
          line-height: 32px;
        }

        h3 {
          font-size: 12px;
          color: #989fdb;
          line-height: 20px;
          margin-bottom: 20px;
        }
      }

      p {
        color: #383e71;
      }
    }

    div {
      text-align: center;
      width: 256px;

      p {
        font-size: 14px;
        line-height: 20px;
        color: white;

        a {
          color: white;
          cursor: pointer;

          text-decoration: underline;
        }
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: no-repeat center;

  background-image: linear-gradient(
      0deg,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url(${womanBackground});
  background-size: cover;
`;
