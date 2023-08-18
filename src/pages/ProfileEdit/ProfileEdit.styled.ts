import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const PageHeader = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;

  strong {
    color: var(--blue-regular1);
    font-weight: 600;
    font-size: 18px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
  }
`;
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubmitButton = styled.button`
  background-color: var(--blue-regular1);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 15px 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background-color: #f7f7f7;

  span {
    margin-bottom: 6px;
    font-size: 12px;
    color: #919191;
  }
`;
