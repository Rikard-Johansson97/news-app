"use client";

import React, { FC } from "react";
import Timeago from "react-timeago";

interface LiveTimeStampProps {
  time: string;
}

const LiveTimeStamp: FC<LiveTimeStampProps> = ({ time }) => {
  return <Timeago date={time} />;
};

export default LiveTimeStamp;
