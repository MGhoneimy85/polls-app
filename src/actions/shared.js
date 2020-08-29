import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'


import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addUserQuestion, addUserQuestionAnswer } from './users';
import { addQuestion, addQuestionAnswer} from './questions';


const AUTHED_ID = null

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function handleAddQuestionAnswer (questionId,author, selectedOption) {
  return (dispatch) => {
      saveQuestionAnswer({
        author,
          qid: questionId,
          answer: selectedOption
      }).then(() => {
          dispatch(addQuestionAnswer(author, questionId, selectedOption));
          dispatch(addUserQuestionAnswer(author, questionId, selectedOption));
      });
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author, callback) {
  return (dispatch) => {
      saveQuestion({
          optionOneText,
          optionTwoText,
          author
      }).then((question) => {
          dispatch(addUserQuestion(question));
          dispatch(addQuestion(question));
      }).then(callback);
  }
}