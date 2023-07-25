import React from "react";
import UserClass from "./UserClass";
class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("patent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>Parent Component</h1>
        <UserClass name="first child" />
      </>
    );
  }
}

export default ParentClass;
