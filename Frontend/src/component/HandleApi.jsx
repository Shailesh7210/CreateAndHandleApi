import React, { useEffect, useState } from "react";

const HandleApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("http://localhost:5000/getuser");

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}

      {!loading && !error && data.length === 0 && (
        <p>No users found.</p>
      )}

      {data.map((user) => (
        <div key={user.id}>
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HandleApi;
