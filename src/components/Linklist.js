import React from "react";
import { Link } from "react-router-dom";

import { links } from "./links";

export const LinkList = () => (
    <div>
        <h2>Links</h2>
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    {link.title}
                    <br />
                    <Link to={`/links/${index}`}>&lt;Link&gt;</Link>
                    <br />
                    <Link to={{pathname: `/links/${index}`,
                                state: { extraInformation: true }
                        }}>
                        {"<Link>"} with extra information
                    </Link>
                    <br />
                </li>
            ))}
        </ul>
    </div>
);
