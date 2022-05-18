import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 15px auto;
  overflow: hidden;
  border-radius: 10px;
  height: 95vh;
  border: 2px solid green;
`;
export const AddBox = styled.div`
  width: 100%;
  margin: 0px auto 5px;
  /* padding: 20px 0; */
  text-align: center;
  background-color: crimson;
  overflow: hidden;
`;
export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto 5px;
  padding: 20px 0;
  text-align: center;
  background-color: green;
  overflow: hidden;
`;
export const Select = styled.select`
  outline: none;
  font-size: 18px;
  border-radius: 5px;
`;
export const Input = styled.input`
  padding: 10px 2px 10px 5px;
  margin: 0 1px;
  width: 100%;
  height: ${(props) => (props.a === "e" ? "100%" : "40px")};
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  overflow: hidden;
`;

export const Button = styled.button`
  color: ${(props) =>
    props.children === "add"
      ? "blue"
      : props.children === "edit"
      ? "green"
      : props.children === "save"
      ? "blue"
      : "red"};
  border: 2px solid
    ${(props) =>
      props.children === "add"
        ? "blue"
        : props.children === "edit"
        ? "green"
        : props.children === "save"
        ? "blue"
        : "red"};
  height: 40px;
  padding: 5px 0px;
  width: 80px;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
  overflow: hidden;
  margin-right: 5px;
  background-color: white;
  cursor: pointer;
`;

// TableContainer

export const TableContainer = styled.div`
  height: 100%;
  overflow: scroll;
  position: relative;
  background: white;
`;

export const Table = styled.table`
  width: 100%;
  border: 0px;
  border-spacing: 0px;
  position: relative;
  background: white;
`;
export const THead = styled.thead`
  border: 0px;
  border-spacing: 0px;
`;
export const TBody = styled.tbody`
  box-sizing: border-box;
`;
export const ThRow = styled.tr`
  text-align: left;
  border: 1px solid rgb(0, 0, 0);
  background: white;
`;
export const Th = styled.th`
  font-weight: bold;
  font-size: 18px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgb(38, 38, 38);
  background: whitesmoke;
  padding: 0px 5px 0px 5px;

  height: 56px;

  width: auto;
  white-space: nowrap;
  position: sticky;
  top: 0px;

  z-index: 1;
`;
export const ThId = styled(Th)`
  width: 40px;
  padding-left: 10px;
  left: 0px;
  z-index: 2;
`;
export const ThEdit = styled(Th)`
  right: 0px;
  left: 0px;
  z-index: 2;
`;
export const ThDel = styled(Th)`
  width: 80px;
  color: red;
`;
export const ThAge = styled(Th)`
  width: 70px;
`;

//* ==== Table Body ====
export const TbRow = styled.tr`
  text-align: left;
  border: 1px solid rgb(0, 0, 0);
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
  cursor: pointer;
`;
export const TbRowAdd = styled.tr`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  >td{
     display: flex;
     align-items: center;
  }
`;
export const Td = styled.td`
  border-width: 0px 0px 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--color);
  white-space: nowrap;

  padding: 0px 5px 0px 5px;

  border-bottom-style: solid;
  border-bottom-color: rgb(245, 245, 245);
  height: 56px;

  left: 0px;
`;
export const TdId = styled(Td)`
  width: 40px;
  padding-left: 10px;
  position: sticky;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  color: black;
  left: 0px;
`;
export const TdAge = styled(Td)`
  width: 70px;
  left: 0px;
`;
export const TdDel = styled(Td)`
  padding: 0 5px;
  width: 80px;
  left: 0px;
`;
