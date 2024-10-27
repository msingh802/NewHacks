"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const quizQuestions = [
  {
    question: "What is the best way to conserve water during a drought?",
    options: ["A) Water your lawn every day", "B) Take shorter showers and fix leaks", "C) Run the dishwasher half-full", "D) Leave taps running"],
    answer: "B) Take shorter showers and fix leaks"
  },
  {
    question: "Why is it important to follow local water restrictions during a drought?",
    options: ["A) It helps everyone conserve water and manage limited supplies", "B) It makes your water bill more expensive", "C) It's a way to avoid using too much electricity", "D) It improves plant growth"],
    answer: "A) It helps everyone conserve water and manage limited supplies"
  },
  {
    question: "What household appliance should you use only when full to conserve water?",
    options: ["A) Dishwasher", "B) Refrigerator", "C) Microwave", "D) Oven"],
    answer: "A) Dishwasher"
  },
  {
    question: "What is a recommended practice for outdoor watering during a drought?",
    options: ["A) Water during the hottest part of the day", "B) Water only in the early morning or late evening", "C) Leave sprinklers on all day", "D) Water daily, regardless of restrictions"],
    answer: "B) Water only in the early morning or late evening"
  },
  {
    question: "How can you keep plants alive while using less water during a drought?",
    options: ["A) Water them frequently with large amounts", "B) Use mulch to retain soil moisture", "C) Spray them with a hose every hour", "D) Move them indoors"],
    answer: "B) Use mulch to retain soil moisture"
  },
  {
    question: "Which type of plants are best to choose for your garden in drought-prone areas?",
    options: ["A) Tropical plants", "B) Water-intensive plants", "C) Drought-resistant plants", "D) Indoor plants"],
    answer: "C) Drought-resistant plants"
  },
  {
    question: "What is one way to reuse water in the home during a drought?",
    options: ["A) Use bathwater to water plants", "B) Pour unused water down the drain", "C) Boil water for drinking multiple times", "D) Store all water in the fridge"],
    answer: "A) Use bathwater to water plants"
  },
  {
    question: "How often should you check for leaks in your home during a drought?",
    options: ["A) Once a year", "B) Once a month", "C) Regularly, especially during a drought", "D) Only when your water bill is high"],
    answer: "C) Regularly, especially during a drought"
  },
  {
    question: "What is a good practice to save water when doing laundry during a drought?",
    options: ["A) Wash only large loads", "B) Wash each item separately", "C) Use hot water for every wash", "D) Run multiple small loads per day"],
    answer: "A) Wash only large loads"
  }
];





export default function Questions() {
  const [idxCurrentQuestion, setIdxCurrentQuestion] = useState(0);
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const router = useRouter();
  const [score, setScore] = useState(0);

  function compare(value) {
    console.log(value);
    if (value === quizQuestions[idxCurrentQuestion].answer) {
      setMsg("Correct!");
      setMsg2("Next Question");
      setScore(score + 1);
    }
    else {
      setMsg("Incorrect!");
      setScore(score - 1);
    }

  }


  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <p>Question:</p>
      <p>{quizQuestions[idxCurrentQuestion].question}</p>
      <p>Options:</p>
      <div className="flex flex-col items-start gap-4">

        {quizQuestions[idxCurrentQuestion].options.map((option, idx) => {
          return (
            <Button key={idx} onClick={(e) => compare(e.target.value)} value={option}>{option}</Button>
          )
        })}
      </div>
      <p>{msg}</p>
      <p>score: {score}</p>
      {msg2 && <Button onClick={() => {
        if (idxCurrentQuestion >= quizQuestions.length - 1) {
          router.push("/end")
        }
        else {
          setIdxCurrentQuestion(idxCurrentQuestion + 1);
          setMsg2("");
          setMsg("");
        }
      }}>{msg2}</Button>}

      <Button onClick={() => {
        if (true) {
          setIdxCurrentQuestion(0);
          setScore(0);
        }
      }}>Restart</Button>
      <Button onClick={() => {
        if (idxCurrentQuestion > 0) {
          setIdxCurrentQuestion((idxCurrentQuestion - 1));
          setScore(score - 1);
        }
        else {
          router.push("/");
          setScore(0);
        }
      }}>Back</Button>
    </div>
  );
}
