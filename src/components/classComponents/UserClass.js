import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("child constructor");
    this.state = {
      userData: { name: "dummy name" },
    };
  }

  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/Grewal009");
    const json = await data.json();
    console.log(json);
    this.setState({
      userData: json,
    });
  }

  render() {
    console.log("child render");
    return (
      <>
        <h1>UserClass classbased component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.state.userData.name}</h2>
      </>
    );
  }
}
export default UserClass;
