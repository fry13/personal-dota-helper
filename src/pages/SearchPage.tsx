import React, { useState } from "react";
import Preloader from "../components/Preloader";
import SearchField from "../components/SearchField";
import SearchResults from "../components/SearchResults";
import { User } from "../types";
import { searchUsers } from "../utils/api";

export default function SearchPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [preloaderVisibility, setPreloaderVisibility] = useState(false);

  function getUsers(inputValue: string) {
    setPreloaderVisibility(true);
    searchUsers(inputValue).then((res) => {
      setPreloaderVisibility(false);
      setUsers(res || []);
    });
  }

  return (
    <div className="container d-flex flex-column vh-100 align-items-center justify-content-center">
      <SearchField getUsers={getUsers} />
      <SearchResults users={users} />
      <Preloader visibility={preloaderVisibility} />
    </div>
  );
}
