import React, {Component} from 'react';
import {UserItem} from "../UserItem/UserItem";

import styles from "./userList.module.scss";

interface userItem {
  id: string; // why not number?
  login: string;
  html_url: string;
  avatar_url: string;
}

interface userProps {
  users: Array<userItem>;
}

export class UserList extends Component<userProps> {
  render() {
    const userList = this.props.users.map(({id, login, html_url, avatar_url}) => {
        return <UserItem key={id} id={id} login={login} avatarUrl={avatar_url} htmlUrl={html_url}/>
      }
    );

    return (
      <div className={styles.userStyle}>
        {userList}
      </div>
    )
  };
}