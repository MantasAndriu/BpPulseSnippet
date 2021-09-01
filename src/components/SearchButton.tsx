import React from 'react';
import { Button } from '@material-ui/core';

export type buttonProps = {
    title: string;
    onClick: () => any;
}

export default function SearchButton(props: buttonProps) {

  return (
    <Button 
        variant="contained" 
        color="primary" 
        style={{ marginLeft: "4.5em", maxWidth: "92vw", marginTop: 8 }}
        fullWidth
        disableElevation
        onClick={() => props.onClick()}
    >
        {props.title}
    </Button>
  )
}