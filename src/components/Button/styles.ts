import styled from 'styled-components';

export const Container = styled.button `
        background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
        box-shadow: 0px 10px 25px #CF99DB;
        border-radius: 8px;

        height: 48px;
        width: 100%;

        border-radius: 10px;
        border: 0;
        padding: 0 17px;

        font-weight: 500;
        margin-top: 8px;
        transition: all 0.2s;


        p {
          color: #FFFFFF !important;

          font-size: 16px;
          font-weight: 600;
        }

        &:hover {
          background: linear-gradient(267.79deg, #575FAD 0%, #9D25B0 99.18%);
          box-shadow: 0px 10px 25px #AB7FB5;

        }


        @media(max-width: 525px) {
      background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
      box-shadow: none;
      border-radius: 8px;

      margin-top: 16px;

      width: 168px;
      height: 48px;

      transition: all 0.2s;

      position: absolute;
      bottom: -5%;

      p {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
      }

      &:hover {
        background: linear-gradient(267.79deg, #575FAD 0%, #9D25B0 99.18%);
        box-shadow: none;
      }
        }


`
