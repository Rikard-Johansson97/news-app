"use client";

import React, { FC } from "react";
import ReactTimeago from "react-timeago";

interface LiveTimeStampProps {
  time: string;
}

const LiveTimeStamp: FC<LiveTimeStampProps> = ({ time }) => {
  return <ReactTimeago date={time} />;
};

export default LiveTimeStamp;
