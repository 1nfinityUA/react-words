import React from "react";
import "./result.css";
import { useSelector} from "react-redux";

const Result = () => {
    const correctOrNot = useSelector((state) => state.resultSlice.correctOrNot);
    const result = useSelector((state) => state.resultSlice.resultItems);
    let percent = 0
    for (var i = 0; i < correctOrNot.length; i++) {
        if (correctOrNot[i] === "correct") {
            percent += 10;
        }
      }
    return (
        <div className="result">
            <div className="result__answers">
                {result.map((el, index) => (
                    <div key={index} className="result__words">
                        <p>{el}</p>
                        <p className={correctOrNot[index] === "correct" ? "mark__correct" : "mark__incorrect"}>{correctOrNot[index]}</p>
                    </div>
                ))}
            </div>
            <div className="result__block">
                <p className="result__clok-text">Твій результат:</p>
                <p className={percent <= 50 ? "result__block-lass50" : "result__block-more50"}>{percent}%</p>
            </div>
        </div>
    );
};

export default Result;
