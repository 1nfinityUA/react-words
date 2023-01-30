import React from "react";
import "./testPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNewResult, addAnsvers } from "../../redux/slices/resultSlice";

const TestPage = () => {
    const dispatch = useDispatch();
    const words = useSelector((state) => state.addSlice.words);
    const translate = useSelector((state) => state.addSlice.translate);
    const result = useSelector((state) => state.resultSlice.resultItems);
    const [random1, setRandom1] = useState(
        Math.floor(Math.random() * translate.length)
    );
    const [random2, setRandom2] = useState(
        Math.floor(Math.random() * translate.length)
    );
    const [random3, setRandom3] = useState(
        Math.floor(Math.random() * translate.length)
    );
    const [randomWord, setRandomWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    );
    const correctAnsver = words.indexOf(randomWord);
    checkRandom();

    React.useEffect(() => {
        setRandom1(Math.floor(Math.random() * translate.length));
        setRandom2(Math.floor(Math.random() * translate.length));
        setRandom3(Math.floor(Math.random() * translate.length));
        setRandomWord(words[Math.floor(Math.random() * words.length)]);
    }, [result]);
    function checkRandom() {
        if (correctAnsver === random1) {
            setRandom1(Math.floor(Math.random() * translate.length));
        }
        if (correctAnsver === random2) {
            setRandom2(Math.floor(Math.random() * translate.length));
        }
        if (correctAnsver === random3) {
            setRandom3(Math.floor(Math.random() * translate.length));
        }
    }
    function createResult (value, buttonValue) {
        dispatch(addNewResult(value));
        
        if (words.indexOf(value) === translate.indexOf(buttonValue)) {
            dispatch(addAnsvers('correct'))
        }
        if (words.indexOf(value) !== translate.indexOf(buttonValue)) {
            dispatch(addAnsvers('wrong'));
        }
    }
    return (
        <div className="testPage">
            <h3>{randomWord}</h3>
            <input
                className="testPage__button"
                onClick={() => createResult(randomWord, translate[correctAnsver])}
                value={translate[correctAnsver]}
                type="button"
            />
            <input
                className="testPage__button"
                onClick={() => createResult(randomWord, translate[random1])}
                value={translate[random1]}
                type="button"
            />
            <input
                className="testPage__button"
                onClick={() => createResult(randomWord, translate[random2])}
                value={translate[random2]}
                type="button"
            />
            <input
                className="testPage__button"
                onClick={() => createResult(randomWord, translate[random3])}
                value={translate[random3]}
                type="button"
            />
        </div>
    );
};

export default TestPage;
