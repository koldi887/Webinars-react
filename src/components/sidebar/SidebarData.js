import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";

export const sideBarData = [
  { title: "Resources", icon: <FiBookOpen size={32} color={"#fe9344"} /> },
  { text: "Blog", subtitle: true },
  { text: "Academy" },
  { title: "Categories", icon: <BiBookmark size={32} color={"#fe9344"} /> },
  { text: "All", subtitle: true },
  { text: "Expert Hot Seat" },
  { text: "Facilitation" },
  { text: "Retrium Updates" },
  { text: "Collaboration" },
  { text: "Retrospective Quick Tips" },
  { text: "Agile Practices 101" },
];
