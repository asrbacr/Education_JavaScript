export const loggerMiddleware = (store) => (next) => (action) => {  // так выглядит любой middleware
    console.log('dispatching ', action); // пошла отправка в action

    console.log('текущее состояние (до того как сработает action) ', store.getState()); // выведет в текущий момент (текущее состояние)
    const result = next(action);
    
    console.log('текущее состояние (ПОСТЕ того как сработает action)', store.getState()); // выведет в текущий момент (текущее состояние)

    return result;
}

// redux-persist это библиотека, которая работает с localStorage