import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

export type inputProps = {
    placeholder: string;
    value?: string;
    label: string;
    setValue: (value: any) => any;
}

export default function InputField(props: inputProps) {

  return (
    <TextField
        label={props.label}
        style={{ margin: "4px 4em", maxWidth: "92vw" }}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}
        margin="normal"
        variant="filled"
        fullWidth
        InputLabelProps={{
            shrink: true,
        }}
    />
  )
}