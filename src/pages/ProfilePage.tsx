import React, { useEffect, useState } from "react";
import { User } from "../types";
import { getBaseUserData } from "../utils/api";

export default function ProfilePage() {
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    const id = document.location.pathname.split("/")[2];
    getBaseUserData(id).then((res) => setUser(res || {}));
  }, []);

  return (
    <main className="container">
      <div className="row row-cols-1 mb-4">
        <div className="col-12">
          <div className="rounded border">
            <p className="lead d-inline align-middle">{user.rank_tier}</p>
            <img
              className="rounded mx-3"
              style={{ width: 96, height: 96 }}
              src={user.avatarfull}
              alt={`${user.personaname}'s avatar`}
            ></img>
            <p className="lead d-inline align-middle fs-1">
              {user.personaname}
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-1">
        <div className="col-8">
          <div className="border rounded">
            <p className="lead d-inline align-middle">{user.rank_tier}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="border rounded">
            <p className="lead d-inline align-middle">{user.rank_tier}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
