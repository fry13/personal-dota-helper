import React from "react";
import { User } from "../types";
import lastMatchCalc from "../utils/lastMatchCalc";

interface listProps {
  users: User[];
}

export default function SearchResults({ users }: listProps) {
  return (
    <ul
      className={
        (users.length === 0 ? "invisible " : "visible ") +
        "list-group h-50 w-100 overflow-scroll border rounded"
      }
    >
      {users.map((user) => {
        return (
          <li
            key={user.account_id}
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action border-0 border-bottom d-flex justify-content-between p-2"
          >
            <div className="d-inline">
              <img
                className="rounded me-3"
                style={{ width: 48 }}
                src={user.avatarfull}
                alt={`${user.personaname}'s avatar`}
              ></img>
              <p className="lead d-inline align-middle">{user.personaname}</p>
            </div>
            <p className="lead d-inline align-middle my-auto">
              <small>{lastMatchCalc(user.last_match_time)}</small>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
