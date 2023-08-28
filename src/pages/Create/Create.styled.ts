import { styled } from 'styled-components';

export const CreateSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 480px;
  aspect-ratio: 9/6;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 2px var(--box-shadow);
  border-radius: 10px;
  margin: 300px auto;
  
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  .link_gr{
    display: flex;
    gap: 20px;
  }
  a {
    width: 130px;
    box-sizing: border-box;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    background-color: var(--blue-regular1);
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    &:hover {
      filter: brightness(110%);
    }
  }
`;
