import "./App.css";
import { Component } from "react";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      isLoading: true,
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users?limit=10").then((res) =>
      res.json().then((res) =>
        this.setState({
          users: res.users,
          isLoading: false,
        })
      )
    );
  }

  onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { users, isLoading, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      const fullName =
        user.firstName.toLocaleLowerCase() + user.lastName.toLocaleLowerCase();
      return fullName.includes(searchString);
    });

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
  }
}

export default App;
