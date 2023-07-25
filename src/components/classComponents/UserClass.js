import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>UserClass classbased component</h1>
        <h2>{this.props.name}</h2>
      </>
    );
  }
}
export default UserClass;
