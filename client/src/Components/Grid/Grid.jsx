import React ,{useState} from 'react'
import {connect} from 'react-redux'
import AddCamera from './AddCamera'
import {Redirect} from 'react-router-dom'
import Player from "./Player"
import {Button , Tooltip} from 'antd'
import './Grid.scss'
function Grid({cameras,username}){
    const [showAddCamera,setShowAddCamera] = useState(cameras.length ? false : true)
    if(!username){
        return(
            <Redirect to={'/'}/>
        )
    }
    return(
        <div className={"Grid"}>
        {
            !showAddCamera ?
            <div className={"videoGridContainer"}>
            {cameras.map((camera,index)=>{
                if(camera.active)
                    return(<Player url={camera.url} key={index} title={index}/>)
                })}
            </div>
            :
                <AddCamera onDone={setShowAddCamera}/>
        }
        {!showAddCamera && 
            <div className={"floatingButton"}>
                <Tooltip title="add new camera">
                    <Button type="primary" shape="circle" icon="plus" size={"large"} onClick={()=>{setShowAddCamera(true)}}/>
                </Tooltip>
            </div>}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cameras: state.cameras,
        username:state.username
    }
}

export default connect(mapStateToProps)(Grid)