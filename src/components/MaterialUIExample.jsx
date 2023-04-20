import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MaterialUIExample = () => {
    const navigate = useNavigate();

    return (
        <div style={{display: 'flex'}}>
            <Stack>
                <Button variant="contained" color="primary">
                    Hello
                </Button>
                <Button variant="contained" color="secondary">
                    World
                </Button>
            </Stack>
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