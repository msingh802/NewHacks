"use client"  
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const quizQuestions = [
    {
        question: "What is a common sign of an impending landslide?",
        options: ["A) Cracks in the ground or streets", "B) Windy weather", "C) Temperature drop", "D) Animals gathering nearby"],
        answer: "A) Cracks in the ground or streets"
    },
    {
        question: "Where should you go if a landslide occurs nearby?",
        options: ["A) Move to higher ground away from the landslide", "B) Stay near the landslide to observe", "C) Head towards the landslide path", "D) Go to a lower area"],
        answer: "A) Move to higher ground away from the landslide"
    },
    {
        question: "What should you include in your emergency kit for landslide preparedness?",
        options: ["A) Food, water, flashlight, first aid kit", "B) Extra soil and sandbags", "C) Houseplants", "D) Office supplies"],
        answer: "A) Food, water, flashlight, first aid kit"
    },
    {
        question: "How can you protect your property from landslides?",
        options: ["A) Build retaining walls and improve drainage", "B) Plant large trees on slopes", "C) Leave hillsides bare", "D) Add extra soil to slopes"],
        answer: "A) Build retaining walls and improve drainage"
    },
    {
        question: "What should you do if you notice signs of ground movement near your home?",
        options: ["A) Report it to local authorities immediately", "B) Wait and see if it worsens", "C) Ignore it", "D) Only tell neighbors"],
        answer: "A) Report it to local authorities immediately"
    },
    {
        question: "What is a good way to stay informed about landslide risks in your area?",
        options: ["A) Check local hazard maps and listen to warnings", "B) Rely only on word of mouth", "C) Wait until a landslide is occurring", "D) Avoid paying attention to local news"],
        answer: "A) Check local hazard maps and listen to warnings"
    },
    {
        question: "When should you evacuate during a landslide warning?",
        options: ["A) Immediately when instructed by officials", "B) After seeing the landslide", "C) Only if it’s close to your home", "D) Never evacuate"],
        answer: "A) Immediately when instructed by officials"
    },
    {
        question: "What is a common cause of landslides?",
        options: ["A) Heavy rainfall and deforestation", "B) Snowfall", "C) Clear skies", "D) Strong winds"],
        answer: "A) Heavy rainfall and deforestation"
    },
    {
        question: "How can planting vegetation on slopes help prevent landslides?",
        options: ["A) Roots stabilize the soil", "B) Plants attract wildlife", "C) It increases water flow", "D) Plants make slopes steeper"],
        answer: "A) Roots stabilize the soil"
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
  