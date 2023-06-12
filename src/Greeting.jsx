import React, { useEffect, useState } from "react";

function Greeting({ Greetings }) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(Greetings());
    console.log("useEffect in : Greeting feedback");
  }, [Greetings]);

  return <div> {greeting}</div>;
}

export default Greeting;
