import React from 'react'
import ButtonUI from '@material-ui/core/Button'

const Button=(props)=> {
    return (
        <ButtonUI onClick={props.action}
         >
              {props.Title}
        </ButtonUI>
    )
}


export default Button;

// import useMediaQuery from '@material-ui/core/useMediaQuery';

// function ButtonCancel() {
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return <Dialog fullScreen={fullScreen} />
// }