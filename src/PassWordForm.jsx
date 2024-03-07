import React from "react";
import { Button } from "@mui/material";


const PassWordForm = () => {
    return (
        <div>
            <Button variant='outlined'
                onClick={() => {
                    alert("Created!");
                }}
            >
                    Create
            </Button>
        </div>
    );
}

export default PassWordForm;