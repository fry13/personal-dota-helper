import React, { useState } from "react";

interface SearchProps {
  getUsers: Function;
}

export default function SearchField({ getUsers }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
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
        onClick={() => getUsers(inputValue)}
      >
        Search
      </button>
    </div>
  );
}
