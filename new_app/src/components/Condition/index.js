import { Component } from "react";
import Welcome from "../Welcome";

class Condition extends Component {
  state = {
    isLoggedIn: true,
  };
  renderAuthButton = () => {
    // const {isLoggedIn} = this.state
    // if(isLoggedIn === true){
    //     return <button>Logout</button>
    // }
    // return <button>Login</button>
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Welcome name="User" />
        {/*<button>Login</button>
            <button>Logout</button>
            {this.renderAuthButton()}*/}

        {isLoggedIn ? <button>Login</button> : null}
      </div>
    );
  }
}
export default Condition;
