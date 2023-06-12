import React, { useMemo, useState } from "react";

const getDataAnalytics = (users) => {
  while (users <= 1000) {
    console.log(` these many users are ${users}`);
  }
  users++;
};

function MemoHook() {
  const [users, setUsers] = useState();
  const [count, setCount] = useState(0);

  const data = useMemo(() => {
    getDataAnalytics(users);
  }, [users]);

  // const data = getDataAnalytics(12);

  return (
    <>
      <div>{data}</div>
      <input
        type="text"
        onClick={(e) => {
          setUsers(e.target.value);
        }}
      />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + by 1
      </button>
    </>
  );
}

export default MemoHook;
