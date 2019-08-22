import styled from "styled-components";

//Styling for Laucnhes

export const DisplayDiv = styled.div`
  width: 98%;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 1%;
  height: auto;
`;

export const Card = styled.div`
  width: 40%;  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  padding: 2.5%;
  background-color: #0E3350;
  height: auto;
  color: #21B8E5
  border-radius: 0.25em;
  border: 0.15em solid rgba(10, 162, 100, 0.4);
  @media (max-width: 800px) {
    width: 80%;
  }
`;
export const P = styled.div`
    color: white;
`;
export const Button = styled.button`
    margin-left: 0.5em;
    margin-right: 0.5em;
    background-color: #0AA264;
    border: 0.15em solid rgb(68, 227, 162);
    border-radius: 0.5em;
    color:white;
    padding: 0.5em;
    font-size: 1em;
`;

export const H2 =styled.h2`
    margin-bottom: 0;
`;