import React,{useState} from 'react';
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography} from "@material-ui/core";
import { getmatchDetails } from '../api/Api';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const MyCard = ({ match })=>{

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);

    const handleClick=(id)=>{
        getmatchDetails(id)
        .then(data=>{
            console.log("MATCH DATA:" ,data);
            setDetail(data);
            handleOpen();
        })
        .catch(error=>console.log("Api Error:", error))
    }

    const getMatchCard =()=>{
    return(
        <Card style={{marginTop:15}}>
            <CardContent>
            < Grid container justify="center" spacing={5} alignItems="center">
                <Grid item>
                        <Typography variant="h6">
                            {match["team-1"]}
                    </Typography></Grid>
                <img style={{width:300 }} src={require("..//Image/trophy.png")} alt="trphy"/>
                    <Grid item>
                        <Typography variant="h6">{match["team-2"]}</Typography></Grid>
            </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button  variant="contained" color="primary" onClick={()=>{
                        handleClick(match.unique_id)
                    }}>SHOW DETAIL</Button>
                    <Button style={{ marginLeft: 20 }} variant="outlined" color="primary">Match Start-Time : {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

    const handleClose=()=>{
        setOpen(false);
    }

    const handleOpen=()=>{
        setOpen(true);
    }

    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Description:->"}
            <DialogContent>
                <DialogContentText id = "alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match:  {""}
                        <span style={{fontWeight:"bold"}}> 
                            {detail.matchStarted? " is started." : " not started."}
                            {""}
                        </span>
                    </Typography>

                        <Typography>
                        Score: 
                            <span style={{ fontWeight: "bold" }}>
                                {detail.score}
                            </span>
                        </Typography>
                </DialogContentText>
            </DialogContent>
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autofocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )

    return(
        <React.Fragment>
            {getMatchCard()}
            {getDialog()}
        </React.Fragment>
    ) 
}
export default MyCard;

