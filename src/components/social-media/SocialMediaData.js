import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2, ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

export const SocialMediaData = [
  {
    name: "Facebook",
    icon: <FaFacebookF color={"#3b5998"} size={30} />,
    href: "http://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: <ImTwitter color={"#00acee"} size={30} />,
    href: "http://www.twitter.com",
  },
  {
    name: "LinkedIn",
    icon: <ImLinkedin2 color={"#0077b5"} size={30} />,
    href: "http://www.linkedin.com",
  },
  {
    name: "Instagram",
    icon: <GrInstagram color={"#8a3ab9"} size={30} />,
    href: "http://www.instagram.com",
  },
];
