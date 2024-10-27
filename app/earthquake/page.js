"use client"  
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const quizQuestions = [
    {
        question: "What is the safest place to take cover during an earthquake?",
        options: ["A) Under a sturdy table or desk", "B) Next to a large window", "C) In an elevator", "D) Near heavy furniture"],
        answer: "A) Under a sturdy table or desk"
    },
    {
        question: "What should you do if you’re indoors during an earthquake?",
        options: ["A) Run outside immediately", "B) Drop, cover, and hold on", "C) Stand in a doorway", "D) Go to the basement"],
        answer: "B) Drop, cover, and hold on"
    },
    {
        question: "What items are essential in an earthquake emergency kit?",
        options: ["A) Canned food, water, flashlight, first aid kit", "B) Extra furniture, decorations, board games", "C) Old clothes and kitchen supplies", "D) A tent and sleeping bags only"],
        answer: "A) Canned food, water, flashlight, first aid kit"
    },
    {
        question: "After an earthquake, when is it safe to re-enter buildings?",
        options: ["A) When emergency officials confirm it is safe", "B) Immediately after the shaking stops", "C) When your neighbors go back inside", "D) Whenever you feel ready"],
        answer: "A) When emergency officials confirm it is safe"
    },
    {
        question: "What is the best way to stay informed during and after an earthquake?",
        options: ["A) Listen to emergency broadcasts and alerts", "B) Call friends and family only", "C) Ignore any official news", "D) Use only social media"],
        answer: "A) Listen to emergency broadcasts and alerts"
    },
    {
        question: "How can you reduce hazards in your home before an earthquake?",
        options: ["A) Secure heavy furniture to walls", "B) Place heavy items on high shelves", "C) Leave items on counters", "D) Place furniture near exits"],
        answer: "A) Secure heavy furniture to walls"
    },
    {
        question: "If you’re in a car during an earthquake, what should you do?",
        options: ["A) Stop in a safe area away from buildings", "B) Speed up to avoid the shaking", "C) Park under an overpass", "D) Keep driving normally"],
        answer: "A) Stop in a safe area away from buildings"
    },
    {
        question: "What should you avoid doing immediately after an earthquake?",
        options: ["A) Turning on the gas", "B) Checking for injuries", "C) Listening to emergency broadcasts", "D) Checking for leaks"],
        answer: "A) Turning on the gas"
    },
    {
        question: "How often should you practice earthquake drills?",
        options: ["A) Every few years", "B) Once a month", "C) At least once a year", "D) Only if you live in a high-risk area"],
        answer: "C) At least once a year"
    }
];




export default function Questions() {
    const [idxCurrentQuestion, setIdxCurrentQuestion] = useState(8);
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const router = useRouter();
  
    function compare(value){
      console.log(value);
      if(value === quizQuestions[idxCurrentQuestion].answer){
        setMsg("Correct!");
        setMsg2("Next Question");
      }
      else {
        setMsg("Incorrect!");
      }
  
    }
  
  
    return (
      <div className="flex items-center flex-col justify-center h-screen">
        <p>Question:</p>
        <p>{quizQuestions[idxCurrentQuestion].question}</p>
        <p>Options:</p>
        <div className="flex flex-col items-start gap-4">
  
          {quizQuestions[idxCurrentQuestion].options.map((option, idx) => {
            return(
            <Button key={idx} onClick={(e) => compare(e.target.value)} value={option}>{option}</Button>
          )
          })}
        </div>
        <p>{msg}</p>
        {msg2 && <Button onClick={() => { 
          if(idxCurrentQuestion >= quizQuestions.length - 1) {
            router.push("/end")
          }
          else {
            setIdxCurrentQuestion(idxCurrentQuestion + 1); 
            setMsg2("");
            setMsg("");
          }
        }}>{msg2}</Button>}
        
        <Button onClick={() => setIdxCurrentQuestion(0)}>Restart</Button>
        <Button onClick={() => {
          if(idxCurrentQuestion > 0) {
              setIdxCurrentQuestion((idxCurrentQuestion - 1))
          }
          router.push("/")
        }}>Back</Button>
      </div>
    );
  }
  