import React from "react";
import styled from "styled-components";

const { Provider, Consumer } = React.createContext();

const NotiBox = styled.div`
  position: relative;

  > ul {
    position: absolute;
    top: 10px;
    right: 6px;
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style: none;

    > li {
      position: relative;
      background: #fff;
      max-width: 300px;
      display: flex;
      padding: 10px;
      padding-right: 30px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
      border-radius: 3px;

      > button {
        position: absolute;
        top: 3px;
        right: 3px;
        border: none;
        border-radius: 50%;
        background-color: #ccc;
        line-height: 0;
        width: 1em;
        height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        outline: none;

        &:hover {
          background-color: #d32f2f;
        }
      }
    }
  }
`;

class NotificationProvider extends React.Component {
  state = {
    messages: []
  };

  handleAddMessage = msg => {
    this.setState({
      messages: [
        { key: this.state.messages.length, text: msg },
        ...this.state.messages
      ]
    });
  };

  render() {
    return (
      <Provider
        value={{
          messages: this.state.messages,
          onAddMessage: this.handleAddMessage
        }}
      >
        <NotiBox className="notification-wrapper">
          <ul>
            {this.state.messages.map(message => (
              <li key={message.key}>{message.text}</li>
            ))}
          </ul>
        </NotiBox>
        {this.props.children}
      </Provider>
    );
  }
}
/**
 * 콜백 함수 하나를 주입한다.
 */
function withNotify(BaseComponent) {
  return function(props) {
    return (
      <Consumer>
        {({ onAddMessage }) => {
          return (
            <BaseComponent
              {...props}
              notify={message => {
                onAddMessage(message);
              }}
            />
          );
        }}
      </Consumer>
    );
  };
}

export { NotificationProvider, withNotify };
