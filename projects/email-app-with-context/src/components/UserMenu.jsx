import React from "react";
import styled from "styled-components";
import UserContent from "../contexts/UserContent";

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ul {
    font-size: 16px;
    list-style: none;
    position: absolute;
    top: 35px;
    right: 5px;
    margin: 0;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  li {
    cursor: pointer;
    display: block;
    padding: 3px 20px;

    &:hover {
      background-color: #e3eafd;
    }

    .click {
      display: block;
    }
  }

  .UserAvatar {
    height: 36px;
    border-radius: 50%;
  }
`;

class UserMenu extends React.Component {
  handleImgClick = e => {
    console.log("click", e.target.className);

    return e.target.className === "UserAvatar"
      ? this.setState({ showLogout: true })
      : this.setState({ showLogout: false });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleImgClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleImgClick);
  }

  state = {
    showLogout: false
  };

  render() {
    return (
      <UserContent.Consumer>
        {value => {
          console.log("user : ", value);
          console.log("showLogout : ", this.state.showLogout);
          const { user, onLogout } = value;
          return (
            <Menu className="UserMenu">
              <img className="UserAvatar" alt="User avatar" src={user.avatar} />
              {this.state.showLogout && (
                <ul>
                  <li onClick={onLogout}>Logout</li>
                </ul>
              )}
            </Menu>
          );
        }}
      </UserContent.Consumer>
    );
  }
}

export default UserMenu;
