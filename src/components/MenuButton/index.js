import styled from "styled-components";

const Round = styled.div`
  border-radius: 50%;
  background-color: #ee3636;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Footer = () => {
  return (
    <Round>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="#ffffff"
          d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
        />
      </svg>
    </Round>
  );
};

export default Footer;
