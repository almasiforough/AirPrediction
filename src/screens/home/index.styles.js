import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    rootGrid:{
        width:"70%",
        margin:'auto',
        marginTop:20,
        backgroundColor:theme.palette.background.main,
        borderRadius:5,
        boxShadow:'0 12px 12px 0 '+theme.palette.shadaow.main,
        borderTopWidth:5,
        borderTopStyle:'solid',
        borderTopColor:theme.palette.primary.main,
        minHeight:600,
        [theme.breakpoints.down('xs')]:{
            width:'95%',
        }
    }
}))
