import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios(`/api/v1/messages/${conversation?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios(`/api/v1/auth/user/${currentUser.toString()}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  useEffect(() => {
    if(messages.length > 0 ) {
      setPreview(messages.slice(-1))
    }
  }, [messages]);
  return (
    <>
      <div className="mes__chatavt">
        <img
          src={
            user?.data.user?.avatar
              ? user?.data.user?.avatar
              : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"
          }
          alt=""
        />
      </div>
      <span className="mes__time">1:49 PM</span>
      <div className="mes__content">
        <h2 className="mes__title">
          {user?.data.user?.displayName
            ? user.data.user.displayName
            : user?.data.user?.userName}
        </h2>
        <div className="mes__preview">
          {
            preview?.map((p) => (
              <span>{p.text}</span>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Conversations;
