import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://jsonplaceholder.typicode.com/users";

function fetchUsersApi() {
  return fetch(url).then((response) => response.json());
}

function* fetchUsers() {
  try {
    const data = yield call(fetchUsersApi);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {}
  yield put({
    type: "FETCH_USERS_FAILURE",
    payload: error.massage || "Что-то произошло не так",
  });
}

function* usersSaga() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsers);
}

export default usersSaga;
