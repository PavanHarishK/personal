import { Component } from "react";
//import Condition from "./components/Condition";
//import Counter from "./components/Counter";
// import Calculator from "./components/Calculator";
//import Welcome from "./components/Welcome";
//import UserProfile from "./components/UserProfile";
import "./App.css";
import Clock from "./components/Clock";

// const initialUserDetailsList = [
//   {
//     uniqueNo: 1,
//     imageUrl:
//       "https://th.bing.com/th/id/R.b2e66599d2c02f3f62de26db9795d779?rik=tE3aLcn0r0VmWA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1539090521412-7af9bbc1110b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=0zfxFmEULX5HCU879qVZF1umRSgJcrYSTm80NgWwsg8%3d&risl=&pid=ImgRaw&r=0",
//     name: "Pavan",
//     role: "Developer",
//   },
//   {
//     uniqueNo: 2,
//     imageUrl:
//       "https://th.bing.com/th/id/R.b2e66599d2c02f3f62de26db9795d779?rik=tE3aLcn0r0VmWA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1539090521412-7af9bbc1110b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=0zfxFmEULX5HCU879qVZF1umRSgJcrYSTm80NgWwsg8%3d&risl=&pid=ImgRaw&r=0",
//     name: "Harish",
//     role: "Developer",
//   },
//   {
//     uniqueNo: 3,
//     imageUrl:
//       "https://th.bing.com/th/id/R.b2e66599d2c02f3f62de26db9795d779?rik=tE3aLcn0r0VmWA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1539090521412-7af9bbc1110b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=0zfxFmEULX5HCU879qVZF1umRSgJcrYSTm80NgWwsg8%3d&risl=&pid=ImgRaw&r=0",
//     name: "Shareef",
//     role: "Developer",
//   },
//   {
//     uniqueNo: 4,
//     imageUrl:
//       "https://th.bing.com/th/id/R.b2e66599d2c02f3f62de26db9795d779?rik=tE3aLcn0r0VmWA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1539090521412-7af9bbc1110b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=0zfxFmEULX5HCU879qVZF1umRSgJcrYSTm80NgWwsg8%3d&risl=&pid=ImgRaw&r=0",
//     name: "Madhu",
//     role: "Developer",
//   },
// ];

class App extends Component {
  state = { showClock: false };

  onToggleClock = () => {
    this.setState((prevState) => {
      const { showClock } = prevState;
      return {
        showClock: !showClock,
      };
    });
  };

  // state = {
  //   searchInput: "",
  //   userDetailsList: initialUserDetailsList,
  // };
  // onChangeSearchInput = (event) => {
  //   this.setState({ searchInput: event.target.value });
  // };

  // onDeleteUser = (uniqueNo) => {
  //   console.log(`uniqueNo ${uniqueNo}`);
  //   const { userDetailsList } = this.state;
  //console.log(`${initialUserDetailsList}`);

  // const filteredUserData = userDetailsList.filter(
  //   (eachUser) => eachUser.uniqueNo !== uniqueNo
  // );
  // this.setState({ userDetailsList: filteredUserData });
  //};

  render() {
    // const { searchInput } = this.state;
    // const searchResult = initialUserDetailsList.filter((eachUser) =>
    //   eachUser.name.includes(searchInput)
    // );
    const { showClock } = this.state;

    return (
      <div>
        {/*
          <Welcome name="Pavan Harish" />
          <Condition />
          <Calculator />
          <Counter />
                  <div className="list-container">
          <h1 className="title">User List</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul>
            {searchResult.map((eachItem) => (
              <UserProfile
                onDeleteUser={this.onDeleteUser}
                userDetails={eachItem}
                key={eachItem.uniqueNo}
              />
            ))}
          </ul>
        */}
        <button type="button" onClick={this.onToggleClock}>
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock/>}
      </div>
    );
  }
}

export default App;
