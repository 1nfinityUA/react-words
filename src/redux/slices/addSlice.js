import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: ['dog', 'cat', 'cow', 'horse', 'pinguin', 'panda', 'dolfin', 'chiken', 'lion', 'chitah', 'tiger' ],
  translate: ['пес', 'кіт', 'корова', 'кінь', 'пінгвін', 'панда', 'дельфін', 'курка', 'лев', 'гепард', 'тигр'],
}

export const addSlice = createSlice({
  name: 'addWordSlice',
  initialState,
  reducers: {
    addNewWord: (state, action) => {
      state.words.push(action.payload);
    },
    addTranslate: (state, action) => {
      state.translate.push(action.payload);
    },
  },
})

export const { addNewWord, addTranslate} = addSlice.actions

export default addSlice.reducer