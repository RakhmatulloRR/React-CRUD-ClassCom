// import logo from '../../unused/logo.svg';

import { Component } from "react";
import /* users, */ { reverseNum } from "../../mock/students";
import {
  Container, SearchBox, Input, Button, TableContainer, Table, THead, TBody, ThRow, ThId, Th, ThDel, TbRow, TdId, Td, TdAge, ThAge, TdDel, Select, TbRowAdd,
} from "./style";

class FilterableUserApp extends Component {
  constructor(props) {
    super(props);
    const locStrData = localStorage.getItem("users")
    const usersLS = locStrData? JSON.parse(locStrData): [];
    this.state = {
      users: usersLS,
      // users: JSON.parse(localStorage.getItem("users"))|| [],
      searchText: "",
      selectedUser: null,
      selectValue: "firstname",
      newUser: {
        firstname: "",
        lastname: "",
        age: "",
        address: "",
        status: "",
        univ: "",
        job: "",
      },
      
    };
  }
  // componentDidMount() {
  //   localStorage.setItem("users", JSON.stringify(this.state.users))
  // }
  render() {
    // * CREATE
    const onAddChange = (e) => {
      const { name, value } = e.target;
      const obj = { ...this.state.newUser, [name]: value } ;
      this.setState({ newUser: obj });
    };
    const onAddClick = () => {
      const {firstname, lastname, age, address, status, univ, job} = this.state.newUser;
      if (!firstname || !lastname || !age || !address || !status || !univ || !job) {
        return;
      }
      
      localStorage.setItem('users', JSON.stringify( [...this.state.users, { ...this.state.newUser, id: Date.now() }]))
      this.setState({
        users: [...this.state.users, { ...this.state.newUser, id: Date.now() }],
        newUser: {
          firstname: "",
          lastname: "",
          age: "",
          address: "",
          status: "",
          univ: "",
          job: "",
        },
      });
    };
    // * READ
    const onSelectClick = (e) => {
      this.setState({selectValue: e.target.value})
    };
    const onSearchChange = (e) => {
      this.setState({ searchText: e.target.value });
    };
    const filteredUsers = this.state.users.filter((user) =>
      user[this.state.selectValue]
        .toString()
        .trim()
        .toLowerCase()
        .includes(this.state.searchText.trim().toLowerCase())
    ); // shu arrayni map() methodi yordamida chiqaramiz

    // * UPDATE
    const onEdit = (user) => {
      this.setState({ selectedUser: user });
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ selectedUser: { ...this.state.selectedUser, [name]: value } });
    };
    
    const onSave = (e) => {
      const { selectedUser } = this.state;
      const newArr = this.state.users.map((u) =>
      u.id === selectedUser.id ? selectedUser : u
      );

      localStorage.setItem("users", JSON.stringify(newArr))
      this.setState({selectedUser: null });
      this.setState({ users: newArr, selectedUser: null });

    };
    // * DELETE
    const onDeleteClick = (id) => {
      localStorage.setItem("users", JSON.stringify(this.state.users.filter((user) => user.id !== id)))
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    };
    const { firstname, lastname, age, address, status, univ, job } =
    this.state.newUser;
    return (
      <Container>
        <h1 style={{textAlign: "center"}}>CRUD app</h1>
        <>
          <Table>
            <TBody>
              <TbRowAdd>
                <TdId>id</TdId>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="firstname"
                    value={firstname}
                    a="a"
                    type="text"
                    placeholder="firstname"
                  />
                </Td>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="lastname"
                    value={lastname}
                    a="a"
                    type="text"
                    placeholder="lastname"
                  />
                </Td>
                <TdAge>
                  <Input
                    onChange={onAddChange}
                    name="age"
                    value={age}
                    a="a"
                    type="text"
                    placeholder="age"
                  />
                </TdAge>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="address"
                    value={address}
                    a="a"
                    type="text"
                    placeholder="address"
                  />
                </Td>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="status"
                    value={status}
                    a="a"
                    type="text"
                    placeholder="status"
                  />
                </Td>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="univ"
                    value={univ}
                    a="a"
                    type="text"
                    placeholder="univ"
                  />
                </Td>
                <Td>
                  <Input
                    onChange={onAddChange}
                    name="job"
                    value={job}
                    a="a"
                    type="text"
                    placeholder="job"
                  />
                </Td>
                <Td>
                  <Button onClick={onAddClick}>add</Button>
                </Td>
              </TbRowAdd>
            </TBody>
          </Table>
        </>
        <SearchBox>
          <Select onClick={onSelectClick}>
            <option value="firstname">firstname</option>
            <option value="lastname">lastname</option>
            <option value="address">address</option>
          </Select>
          <Input
            onChange={onSearchChange}
            value={this.state.searchText}
            type="text"
            placeholder="quick search..."
          />
        </SearchBox>
        {/* Table */}
        <TableContainer>
          <Table>
            <THead>
              <ThRow>
                <ThId>ID</ThId>
                <Th>firstname</Th>
                <Th>lastname</Th>
                <ThAge>Age</ThAge>
                <Th>Address</Th>
                <Th>Status</Th>
                <Th>Univ</Th>
                <Th>Job</Th>
                <Th>Edit</Th>
                <ThDel>Delete</ThDel>
              </ThRow>
            </THead>
            {/* Table body */}
            <TBody>
              {filteredUsers.map((user) => (
                <TbRow key={user.id}>
                  {this.state.selectedUser?.id === user.id ? (
                    <>
                      <TdId>{reverseNum(user.id)}</TdId>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="firstname"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.firstname}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="lastname"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.lastname}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="age"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.age}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="address"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.address}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="status"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.status}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="univ"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.univ}
                        />
                      </Td>
                      <Td>
                        <Input
                          onChange={handleChange}
                          name="job"
                          a="e"
                          type="text"
                          value={this.state.selectedUser?.job}
                        />
                      </Td>
                    </>
                  ) : (
                    <>
                      <TdId>{reverseNum(user.id)}</TdId>
                      <Td>{user.firstname}</Td>
                      <Td>{user.lastname}</Td>
                      <TdAge>{user.age}</TdAge>
                      <Td>{user.address}</Td>
                      <Td>{user.status}</Td>
                      <Td>{user.univ}</Td>
                      <Td>{user.job}</Td>
                    </>
                  )}

                  <Td>
                    {this.state.selectedUser?.id === user.id ? (
                      <>
                        <Button onClick={onSave}>save</Button>
                        <Button onClick={() => onEdit(null)}>cancel</Button>
                      </>
                    ) : (
                      <Button onClick={() => onEdit(user)}>edit</Button>
                    )}
                  </Td>
                  <TdDel>
                    <Button onClick={() => onDeleteClick(user.id)}>❌</Button>
                  </TdDel>
                </TbRow>
              ))}
            </TBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default FilterableUserApp;
