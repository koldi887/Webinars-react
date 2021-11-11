import React from "react";
import classes from "./SocialMedia.module.css";
import { SocialMediaData } from "./SocialMediaData";

export default function SocialMedia() {
  return (
    <>
      <ul className={classes.socialMediaWrapper}>
        {SocialMediaData.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
