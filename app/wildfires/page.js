"use client"  
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const quizQuestions = [
    {
        question: "What is the first thing you should do if there’s a wildfire nearby?",
        options: ["A) Evacuate when ordered by officials", "B) Stay and watch from a safe distance", "C) Go outside to take photos", "D) Ignore the fire"],
        answer: "A) Evacuate when ordered by officials"
    },
    {
        question: "What should you have in your wildfire emergency kit?",
        options: ["A) Food, water, mask, flashlight, and first aid kit", "B) Extra wood and matches", "C) Only food and blankets", "D) Kitchen supplies and utensils"],
        answer: "A) Food, water, mask, flashlight, and first aid kit"
    },
    {
        question: "Which of these is a good way to protect your home from wildfires?",
        options: ["A) Remove dead vegetation and clear gutters", "B) Add wooden structures to your yard", "C) Keep flammable items close to the house", "D) Avoid trimming trees"],
        answer: "A) Remove dead vegetation and clear gutters"
    },
    {
        question: "Where should you go if you have to evacuate due to a wildfire?",
        options: ["A) Follow designated evacuation routes", "B) Head into the forest to shelter", "C) Drive toward the fire to observe", "D) Find shelter on a mountain"],
        answer: "A) Follow designated evacuation routes"
    },
    {
        question: "Why is it important to keep a mask or respirator in your wildfire kit?",
        options: ["A) It helps reduce smoke inhalation", "B) It is fashionable", "C) It prevents dust", "D) It keeps you warm"],
        answer: "A) It helps reduce smoke inhalation"
    },
    {
        question: "What is defensible space in wildfire preparedness?",
        options: ["A) Clearing area around your home to reduce fire spread", "B) Space designated for camping", "C) A concrete wall around your house", "D) Fireproof rooms inside the home"],
        answer: "A) Clearing area around your home to reduce fire spread"
    },
    {
        question: "How can you stay informed during a wildfire?",
        options: ["A) Listen to emergency broadcasts", "B) Watch only social media", "C) Call neighbors for updates", "D) Don’t check any updates"],
        answer: "A) Listen to emergency broadcasts"
    },
    {
        question: "What is a good material choice for home exteriors in fire-prone areas?",
        options: ["A) Fire-resistant materials like metal or brick", "B) Wooden shingles", "C) Fabric awnings", "D) Plastic siding"],
        answer: "A) Fire-resistant materials like metal or brick"
    },
    {
        question: "How often should you practice wildfire evacuation drills?",
        options: ["A) At least once a year", "B) Every few years", "C) Once every 10 years", "D) Never"],
        answer: "A) At least once a year"
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
  