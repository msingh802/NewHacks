"use client"  
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";


const quizQuestions = [
    {
        question: "What is the most important step to take when you receive a flood warning?",
        options: ["A) Ignore it", "B) Prepare to evacuate", "C) Call your neighbors", "D) Go to sleep"],
        answer: "B) Prepare to evacuate"
    },
    {
        question: "Where should you go if a flood occurs and evacuation orders are in place?",
        options: ["A) The highest floor of your home", "B) A designated evacuation center", "C) The basement", "D) An underground shelter"],
        answer: "B) A designated evacuation center"
    },
    {
        question: "What should be included in a flood emergency kit?",
        options: ["A) Food, water, first aid supplies, and important documents", "B) Video games and a TV", "C) Decorative items", "D) Cleaning supplies"],
        answer: "A) Food, water, first aid supplies, and important documents"
    },
    {
        question: "If you’re caught driving in a flood, what should you do?",
        options: ["A) Drive through quickly", "B) Try to find another route", "C) Abandon your car immediately", "D) Turn on your high beams and keep driving"],
        answer: "B) Try to find another route"
    },
    {
        question: "What is the minimum depth of moving floodwater that can sweep a person off their feet?",
        options: ["A) 3 feet", "B) 2 feet", "C) 6 inches", "D) 1 foot"],
        answer: "C) 6 inches"
    },
    {
        question: "How can you find out if your home is in a flood-prone area?",
        options: ["A) Ask a neighbor", "B) Check local flood maps or ask local authorities", "C) Assume based on nearby bodies of water", "D) Wait until it floods to find out"],
        answer: "B) Check local flood maps or ask local authorities"
    },
    {
        question: "Which of these is a good way to reduce flood damage to your home?",
        options: ["A) Remove sandbags from around the property", "B) Raise electrical appliances and utilities", "C) Install carpet throughout the basement", "D) Leave windows open"],
        answer: "B) Raise electrical appliances and utilities"
    },
    {
        question: "Why is it dangerous to walk or drive through floodwater?",
        options: ["A) Floodwater is usually clean", "B) Floodwater can contain hidden debris, contamination, and strong currents", "C) It’s fun to splash in", "D) Floodwater can make driving faster"],
        answer: "B) Floodwater can contain hidden debris, contamination, and strong currents"
    },
    {
        question: "What should you do if you come into contact with floodwater?",
        options: ["A) Keep wearing the same clothes", "B) Wash thoroughly with soap and clean water as soon as possible", "C) Wait until the flood subsides to clean up", "D) Dry off with a towel and keep going"],
        answer: "B) Wash thoroughly with soap and clean water as soon as possible"
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
        } else {
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
                        <Button key={idx} onClick={(e) => compare(e.target.value)} value={option}>
                            {option}
                        </Button>
                    );
                })}
            </div>
            <p>{msg}</p>
            <p>score : {score}</p>
            {msg2 && (
                <Button
                    onClick={() => {
                        if (idxCurrentQuestion >= quizQuestions.length - 1) {
                            router.push("/end")
                            setScore(0);
                        } else {
                            setIdxCurrentQuestion(idxCurrentQuestion + 1);
                            setMsg2("");
                            setMsg("");
                        }
                    }}
                >
                    {msg2}
                </Button>
            )}
            <Button onClick={() => { 
                if(true){
                    setIdxCurrentQuestion(0)
                    setScore(0)}}}>Restart</Button>
            <Button
                onClick={() => {
                    if (idxCurrentQuestion > 0) {
                        setIdxCurrentQuestion(idxCurrentQuestion - 1);
                        setScore(score -1);
                    }
                    else{
                    router.push("/");
                    setScore(0);}
                }}
            >
                Back
            </Button>
        </div>
    );
}
 