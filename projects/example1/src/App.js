import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

class Profile extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    const { onLoading } = this.props;
    onLoading(true);
    fetch(`https://api.github.com/users/${this.props.profileId}`)
      .then(res => {
        console.log(res.data);
        return res.json();
      })
      .then(data => {
        onLoading(false);
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    const { loading, match } = this.props;

    if (loading) return <div>정보를 불러오는 중입니다...</div>;
    return (
      <div>
        프로필 정보: {match.params.profileId} {this.state.data}
      </div>
    );
  }
}

const SelectProfile = () => <div>프로필을 하나 선택하세요</div>;

class App extends React.Component {
  state = {
    loading: true
  };

  handleLoading = loading => {
    this.setState({ loading });
  };

  render() {
    return (
      <div>
        <div className="links">
          <Link to="/profile" className="link">
            Home
          </Link>

          <Link to="/profile/miconblog" className="link">
            Profile 1
          </Link>
          <Link to="/profile/ksj1026" className="link">
            Profile 2
          </Link>
        </div>

        <div className="tabs">
          <Switch>
            <Route path="/profile" exact component={SelectProfile} />
            <Route
              path="/profile/:profileId"
              render={props => {
                return (
                  <Profile
                    key={props.location.pathname}
                    {...props}
                    loading={this.state.loading}
                    onLoading={this.handleLoading}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
