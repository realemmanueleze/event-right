import React from "react";
import Button from "../../components/ui/Button";

function AllEvents() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Button link={"/"}>Explore Events</Button>
    </div>
  );
}
export default AllEvents;
