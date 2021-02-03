import React, {Component} from 'react';
import {UserItem} from "../UserItem/UserItem";

import styles from "./userList.module.scss";

export class UserList extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "crocoBot",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "crocoBot",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: "3",
        login: "crocoBot",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/defunkt",
      },
    ]
  }

  render() {
    const userList = this.state.users.map(({id, login, html_url, avatar_url}) => {
        return <UserItem id={id} login={login} avatarUrl={avatar_url} htmlUrl={html_url}/>
      }
    );

    return (
      <div className={styles.userStyle}>
        {userList}
      </div>
    )
  };
}