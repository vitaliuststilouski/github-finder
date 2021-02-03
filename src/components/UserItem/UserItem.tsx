import React from 'react';

interface userItemProps {
  id: string,
  login: string,
  avatarUrl: string,
  htmlUrl: string,
}

export const UserItem = ({id, avatarUrl, htmlUrl, login}: userItemProps) => {
  return (
    <div key={id} className="card text-center">
      <img src={avatarUrl} alt="" className="round-img" style={{width: "60px"}}/>
      <h3>{login}</h3>
      <div>
        <a href={htmlUrl} className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  )
}