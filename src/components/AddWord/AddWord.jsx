import React from "react";
import "./addWord.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addNewWord, addTranslate} from '../../redux/slices/addSlice'

const AddWord = () => {
    const dispatch = useDispatch();
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const setState = (input1, input2) => {
        dispatch(addNewWord(input1));
        dispatch(addTranslate(input2));
        setInput2('');
        setInput1('');
    }
    return (
        <div className="addWord">
            <div className="addWord_box">
                <p className="addWord__box-text">Додайте нове слово</p>
                <input
                    className="addWord__box-input"
                    type="text"
                    value={input1}
                    placeholder="введіть слово"
                    onChange={event => setInput1(event.target.value)}
                />
            </div>
            <div className="addWord_box">
                <p className="addWord__box-text">Додайте переклад</p>
                <input
                    className="addWord__box-input"
                    type="text"
                    placeholder="переклад"
                    value={input2}
                    onChange={event => setInput2(event.target.value)}
                />
            </div>
            <button onClick={() => setState(input1, input2)} className="addWord__button">Додати</button>
        </div>
    );
};

export default AddWord;
