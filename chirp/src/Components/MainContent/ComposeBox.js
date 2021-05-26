import React,{useState}  from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../CSS/ComposeBox.scss"
import ContentEditable from 'react-contenteditable'


export default function ComposeBox() {

    const [temp, setTemp] = useState("What's happening?")
    return (
        <div className = "composeBox">
            <div className = "composeBox_img">
                <img src = "https://media-exp1.licdn.com/dms/image/C5635AQFslHsPwzfOiQ/profile-framedphoto-shrink_200_200/0/1608499210095?e=1622001600&v=beta&t=nFrjUcUfuPUeZol_rL_2d8iSLAbvXF86OKi0ASLnPwA"/>
            </div>
            
            <div className = "composeBox_form">
                
                {/* <TextField
                    // label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    className = "composeBox_input"
                    fullWidth = {true}
                    
                 
                /> */}
                
                
                <form className = "composeBox_form">
                    {/* <input 
                        type="text"
                        placeholder = "What's happening?"
                        className = "composeBox_form_input"
                        contentEditable= {true}
                        
                    /> */}
                    <ContentEditable
                        className = "composeBox_form_input"
                        // html = {temp}
                        placeholder = "What's happening?"
                    />
                    
                    <div  className = "composeBox_form_bottom">
                        {/* <Button variant="outlined" className="composeBox_form_bottom_button" borderRadius="50%"><h2>button</h2></Button> */}
                        <div className="composeBox_form_bottom_button">
                            <span>
                                <b>Chirp</b>
                                
                            </span>
                        </div>
                    </div>
                    
                </form>

            </div>

        </div>
    )
}
