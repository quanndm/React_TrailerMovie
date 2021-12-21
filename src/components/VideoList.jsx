import React, {useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router'
import tmdbApi from '../api/tmdbApi'
const VideoList = (props) => {
    const {category} = useParams();
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideos = async ()=>{
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos()
    }, [category, props.id])
    return (
        <>
            {
                videos && videos.map((item, index)=>(
                    <Video key={index} item={item}/>
                ))
            }
        </>
    )
}

const Video = (props)=>{
    const {item} = props;
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9/16 +"px";
        iframeRef.current.setAttribute("height", height);
    }, [])
    return(
        <div className="video">
            <h2 className="video__title">
                {item.name}
            </h2>
            <iframe 
                src={`https://www.youtube.com/embed/${item.key}`} 
                ref={iframeRef}
                width="100%"
                title="video"
            />
        </div>
    )
}
export default VideoList
