
import React, { useEffect, Fragment, useState } from 'react'
import Button from '../elements/Button';
import axios from 'axios';
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
const App = () => {
  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });

  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log("fail")
    return null;
  }

  var Stayus = false;
  const Authenication = () => {
    console.log("test")

    Stayus = true
    SpeechRecognition.startListening()
  }
  const AuthenicationFa = async () => {
    SpeechRecognition.stopListening()
    console.log("Stop")
    localStorage.setItem("trasns", transcript)
    Stayus = true

    let URL = "https://siri2-0.herokuapp.com/siri/openAI"

    if (transcript != "") {
      await axios.post(URL, {
        Text: transcript,


      }).then(res => {
        console.log(res.data.Message);
        speak({ text: res.data.Message })

      }).catch(err => {
        console.log(err);
      });

    } else {
      speak({ text: "ASK Siri 2.0 First" })
    }


  }






  return (



    <div >
      <div >
        <br></br> <br></br>

        <center>

          <Button onClick={Authenication} tag="a" color="primary">
            Ask Siri 2.0
          </Button>

          <span style={{ marginLeft: "10px" }}></span>

          <span onClick={AuthenicationFa}>
            <Button tag="a" color="primary">
              Get Answer
            </Button></span>

          <p>{transcript}</p>
        </center >

      </div>


    </div>
  );
};
export default App;