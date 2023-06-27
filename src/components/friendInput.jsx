"use client";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useState } from "react";
export default FriendInput;

function FriendInput() {
  const [friendInfo, setfriendInfo] = useState({
    Name: "",
    Age: "",
    ContactNumber: "",
  });

  const handleClick = () => {};

  return (
    <>
      {/* Name input */}
      <div>
        <Label htmlFor="name" value="Name" />
        <TextInput Label="name" id="name" />
      </div>
      {/* Age input */}
      <div>
        <Label htmlFor="age" value="Age" />
        <TextInput Label="age" id="age" />
      </div>
      {/* contact number input */}
      <div>
        <Label htmlFor="contactNumber" value="Contact Number" />
        <TextInput Label="contactNumber" id="contactNumber" />
      </div>
      <button onClick={handleClick()}>Submit</button>
    </>
  );
}
