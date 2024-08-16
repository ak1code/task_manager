import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;

  width: 80%;
  margin: auto;
  margin-top: 1rem;
  text-align: center;
  /* border: 1px solid red; */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const MainDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const ImageCol = styled.div`
  width: 60%;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const FormCol = styled.div`
  width: 40%;
  align-items: center;
  align-content: center;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* border: 1px solid red; */
`;

export const FromButton = styled.button`
  width: 100%;
`;
