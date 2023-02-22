import React, { useState } from "react";
import { searchUsers } from "../../utils/api";
import { User } from "../../types";

export default function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  function getUsers() {
    if (inputValue.length < 3) return;
    else searchUsers(inputValue).then((res) => setUsers(res || []));
  }

  function lastMatchCalc(date: string) {
    const dateDiff = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
    );
    if (Number.isNaN(dateDiff)) return "";
    if (dateDiff < 1) return "Last match: <1 day ago";
    else return `Last match: ${dateDiff} days ago`;
  }

  return (
    <div className="container d-flex flex-column vh-100 align-items-center justify-content-center">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="SteamID or nickname"
          aria-label="SteamID or nickname"
          aria-describedby="button-addon2"
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={() => getUsers()}
        >
          Search
        </button>
      </div>
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
              className="list-group-item list-group-item-action border-0 border-bottom d-flex justify-content-between"
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
    </div>
  );
}
