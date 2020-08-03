import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 1px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  /* text-align: center; */
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
  img {
    width: 50px;
  }

  .imgAlura {
    width: 30px;
    color: var(--white);
    img {
      margin-left: 10px;
    }
  }

  .contact-item {
    display: inline-flex;
    align-items: center;
    line-height: 2.2rem;
    text-decoration: none;
    color: var(--white);
    img {
      margin-left: 10px;
    }
  }

  span {
    font-size: 0.8rem;
    font-style: italic;
    line-height: 2.2rem;
  }
`;
