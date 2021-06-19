import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/userAction";
class Photo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  fetchUser = () => {
    this.props.fetchUser();
  };
  render() {
    return (
      <>
        {this.props.imgUrl && <img src={this.props.imgUrl} alt="color" />}
        <button onClick={this.fetchUser}>GET USER</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { imgUrl: state.postDetails.posts && state.postDetails.posts.url };
};
const mapDispatchToProps = {
  fetchUser: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
