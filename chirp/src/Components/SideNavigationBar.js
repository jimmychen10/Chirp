import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./CSS/SideNavigationBar.scss"
export default function SideNavigationBar() {
    return (
        <div className = "navigationBar">
            <div className = "homeButton">
                <TwitterIcon/>
                <p></p>
            </div>
            <div className = "messegeButton">
                <MailOutlineIcon/>
                <p>Messages</p>

            </div>
            <div className = "profileButton">
                <PersonOutlineIcon/>
                <p>Profile</p>

            </div>
            <div className = "likedButton">
                <FavoriteBorderIcon/>
                <p>Liked</p>

            </div>
        </div>
    )
}

