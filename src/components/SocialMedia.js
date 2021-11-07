import React from 'react';
import classes from './socialMedia.module.css'
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

export default function  SocialMedia() {
    const c = classes
    return (

        <div className={c.socialMediaWrapper}>
                <a href="http://www.facebook.com">
                    <FaFacebookF
                        color={'#3b5998'}
                        size={30}
                    />
                </a>
                <a href="http://www.twitter.com">
                    <ImTwitter
                        color={'#00acee'}
                        size={30}
                    />
                </a>
                <a href="http://www.linkedin.com">
                    <ImLinkedin2
                    color={'#0077b5'}
                    size={30}
                /></a>
                <a href="http://www.instagram.com">
                    <GrInstagram
                        color={'#8a3ab9'}
                        size={30}
                    />
                </a>
        </div>
    );
}

