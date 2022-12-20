import React from "react";
import classes from "./main-header.module.css";
import Link from "next/link";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">EventRight</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Explore All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
