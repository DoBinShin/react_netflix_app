import React, {useEffect, useState} from 'react';
import "./Nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);


    return (
        <nav className={"nav"}>
            <img
                alt={"Netflix Logo"}
                src={"https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"}
                className={"nav_logo"}
                onClick={() => window.location.reload()}
            />
            <img
                alt={"Profile Logo"}
                src={"https://yt3.googleusercontent.com/SXKyE4XgHJtX4qLS-9FKDuZt9EpBfeFPlGmNQdqsfxW2FDaKOjE53Mb20E43QuQfNDritLK1aw=s900-c-k-c0x00ffffff-no-rj"}
                className={"nav_avatar"}
            />
        </nav>
    );
};

export default Nav;
