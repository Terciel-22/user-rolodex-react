import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";
import { getData } from "./utils/data.utils";

export type User = {
  firstName: string;
  lastName: string;
  image: string;
  email: string;
};

type Data = {
  users: User[];
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const fetchUsers = async () => {
      const { users } = await getData<Data>(
        "https://dummyjson.com/users?limit=10"
      );
      setUsers(users);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user: User) => {
      const fullName =
        user.firstName.toLocaleLowerCase() + user.lastName.toLocaleLowerCase();
      return fullName.includes(searchField);
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">User Rolodex</h1>
        <SearchBox
          className="user-search-box"
          placeholder="Search user"
          onChangeHandler={onSearchChange}
        />

        <CardList users={filteredUsers} isLoading={isLoading} />
      </header>
    </div>
  );
};

export default App;
