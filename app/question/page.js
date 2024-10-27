"use client"  
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const quizQuestions = [
  {
      question: "What should be included in an emergency preparedness kit?",
      options: ["A) Food, water, flashlight, first-aid kit, medications", "B) Seasonal clothing, family photo album, cooking ingredients, candles",
           "C) Wallet, passport, travel guide, spare car keys", "D) Textbooks, sporting equipment, hair products, decorative items"],
      answer: "A) Food, water, flashlight, first-aid kit, medications"
      
  },
  {
      question: "What steps can you take to disaster-proof your home, such as securing heavy objects or reinforcing windows?",
      options: ["A) Move furniture regularly to new spots, unplug electronics when not in use", "B) Secure heavy items, reinforce windows and doors, install smoke alarms",
           "C) Paint walls, add decorative items, replace light fixtures often", "D) Keep closets and drawers closed, turn off the lights when leaving"],
      answer: "B) Secure heavy items, reinforce windows and doors, install smoke alarms"
      
  },
  {
      question: "What is the minimum amount of water recommended per person in an emergency preparedness kit?",
      options: ["A) 1.5 gallons per day for two days", "B) 1 litre per day for five days",
           "C) 2 gallons per week", "D) 1 gallon per day for at least three days"],
      answer: "D) 1 gallon per day for at least three days"
      
  },
  {
      question: "How can you prepare pets and animals for emergency situations?",
      options: ["A) Have a pet emergency kit, identify safe pet-friendly locations, keep pets’ ID tags updated", "B) Train pets to follow commands, feed them before evacuating, prepare a backup food supply",
           "C) Leave pets with neighbours, provide extra food and water, remove their ID tags", "D) Place pets in their usual spaces, ensure they have access to windows, avoid cages"],
      answer: "A) Have a pet emergency kit, identify safe pet-friendly locations, keep pets’ ID tags updated"
      
  },
  {
      question: "What types of emergency contacts should you maintain, and why is it crucial to include local utilities in your communication list during a disaster?",
      options: ["A) Only family members; utility contacts are unnecessary in emergencies", "B) Local, out-of-town, and utility contacts; utility contacts help report outages, ensuring safe living conditions post-disaster",
           "C) Only out-of-town contacts; utilities are not relevant to personal safety", "D) Just friends and neighbours; utilities provide no immediate support"],
      answer: "B) Local, out-of-town, and utility contacts; utility contacts help report outages, ensuring safe living conditions post-disaster"
      
  },  
  {
      question: "How often should you review and update your emergency supplies, and what specific seasonal considerations should you account for to ensure adequacy?",
      options: ["A) Every year; seasonal considerations include temperature changes and potential natural disasters", "B) Only when an emergency occurs; seasonal adjustments are unnecessary",
           "C) Every six months; consider food expiration dates and weather-related needs", "D) Every three months; update supplies based on current events in your community"],
      answer: "C) Every six months; consider food expiration dates and weather-related needs"
      
  },
  {
      question: "What should be the focus of public education campaigns regarding natural disaster preparedness?",
      options: ["A) To promote emergency supplies only", "B) To educate communities on risk assessment, personal preparedness, and recovery strategies",
           "C) To emphasise social media sharing during disasters", "D) To discourage participation in local preparedness activities"],
      answer: "B) To educate communities on risk assessment, personal preparedness, and recovery strategies"
      
  },  
  {
      question: "What is the first thing you should do when you hear a tornado warning?",
      options: ["A) Go outside to watch the tornado", "B) Call friends and family",
           "C) Seek shelter in a sturdy building or basement", "D) Continue with your daily activities"],
      answer: "C) Seek shelter in a sturdy building or basement"
      
  }, 
  {
      question: "What is the primary purpose of having a family emergency plan?",
      options: ["A) To have a fun family activity", "B) To ensure that family members know where to go and what to do during an emergency",
           "C) To plan for family vacations", "D) To determine who gets the remote control during a power outage"],
      answer: "B) To ensure that family members know where to go and what to do during an emergency"
      
  }

  

];



export default function Questions() {
  const [idxCurrentQuestion, setIdxCurrentQuestion] = useState(0);
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
        setIdxCurrentQuestion(idxCurrentQuestion + 1); 
        setMsg2("");
        setMsg("");
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
