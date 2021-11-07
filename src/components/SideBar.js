import React from "react";
import { BiBookmark } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import classes from "./sidebar.module.css";

export default function SideBar() {
    const c = classes
    return (
        <div className={c.sidebarWrapper}>

            <ul className={'list'}>
                <li className={c.subtitle}>
                    <FiBookOpen
                        size={32}
                        color={'#fe9344'}
                    />
                    <p><strong>Resources</strong></p>
                </li>
                <li
                    style={{color: '#fe9344'}}>
                    <strong>Blog</strong>
                </li>
                <li>Academy</li>
            </ul>

            <ul className={'list'}>
                <li className={c.subtitle}>
                    <BiBookmark
                        size={32}
                        color={'#fe9344'}
                    />
                    <p><strong>Categories</strong></p>
                </li>
                <li
                    style={{color: '#fe9344'}}>
                    <strong>All</strong>
                </li>
                <li>Expert Hot Seat</li>
                <li>Facilitation</li>
                <li>Retrium Updates</li>
                <li>Collaboration and <br/> Communication</li>
                <li>Retrospective Quick Tips</li>
                <li>Agile Practices 101</li>
            </ul>
        </div>
    )
}