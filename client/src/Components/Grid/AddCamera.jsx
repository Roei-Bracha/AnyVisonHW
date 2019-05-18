import React , {useState} from 'react';
import {Card ,Input ,Button} from 'antd'
import {connect} from 'react-redux';
import {addNewCamera} from '../../redux/actions'
import {baseUrl} from '../../config'
function AddCamera ({addCamera , username , onDone}){
    const [url, setUrl] = useState("")
    return(
        <div className={'AddCamera'}>
            <Card title="Add New Camera">
                <div className={"cardContainer"}>
                    <div>
                        <Input placeholder={"Camera url"} value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
                    </div>
                    <div className={"buttons"}>
                        <Button onClick={()=>{setUrl('rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov')}}> use Example </Button>
                        <Button type="primary" onClick={
                            ()=>{
                                addCamera(url)
                                updateCameraInDb(url,username)
                                onDone()
                            }}>Add camera</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        addCamera:(url)=>{
            dispatch(addNewCamera(url))
        }
    }
}

const mapStateToProps = (state , ownProps)=>{
    return{
        username:state.username
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCamera)

function updateCameraInDb (url,username){
    fetch(`${baseUrl}/api/addCamera`,{ // we do a fetch to the server to create the user
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username:username.toLowerCase(),
            url
        })
    })
}