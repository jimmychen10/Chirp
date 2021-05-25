import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./CSS/SideNavigationBar.scss"
export default function SideNavigationBar() {
    return (
        <div className = "leftSide">

            <div className = "navigationBar">
                <div>
                    <div className = "homeButton">
                            <TwitterIcon/>

                    </div>
                </div>
                <div>
                    <div className = "messegeButton">
                            <MailOutlineIcon/>
                            <h2>Messages</h2>

                    </div>
                </div>
                <div>
                    <div className = "likedButton">
                            <FavoriteBorderIcon/>
                            <h2>Liked</h2>
                        </div>
                </div>
                <div>
                    <div className = "profileButton">
                            <PersonOutlineIcon/>
                            <h2>Profile</h2>
                        </div>
                </div>
            </div>
        </div>
    )
}

