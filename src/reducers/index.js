import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
  let{text,dueDate} = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removebyId = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('Yeni Reducer Reminders', reminders);
  return reminders
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('yeni görev eklendi', reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = removebyId(state, action.id);
      return reminders;

    default:
      return state
  }
}

export default reminders;