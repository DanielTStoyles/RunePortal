import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MaterialUIExample = () => {
    const navigate = useNavigate();

    return (
        <div style={{display: 'flex'}}>
             {/* The Stack component is a Material UI component. It is a container (div) that can be styled. */}
            <Stack>
                <Button variant="contained" color="primary">
                    Hello
                </Button>
                <Button variant="contained" color="secondary">
                    World
                </Button>
            </Stack>
            {/* This is the above example done with plain HTML, note with React we can do in-line styling and avoid CSS*/}
            <div style={{display: 'flex', flexDirection: "column"}}>
                <button>
                    Hello
                </button>
                <button>
                    World
                </button>
            </div>
            <Button variant="contained" color="error" onClick={() => navigate('/deep-state')}>Where am I?</Button>
        </div>
    )
}

export default MaterialUIExample;