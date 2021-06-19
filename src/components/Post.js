import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {getPhotos} from '../redux/actions/postAction'
import Photo from './Photo'
const Post = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userDetails);
  const fetchPhotos = () => {
    dispatch(getPhotos())
  }
  return (
    <div>
  {userInfo && userInfo.name}
  <hr/>
  <button onClick={fetchPhotos}>Fetch Photos</button>
  <Photo/>
  </div>)
};

export default Post;
