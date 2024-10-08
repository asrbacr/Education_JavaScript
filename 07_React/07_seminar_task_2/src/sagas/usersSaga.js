import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/userReduser";

const url = "https://jsonplaceholder.typicode.com/users4";

async function fetchUsersApi() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Страница не существует");
  }
  return await response.json();
}

function* fetchUsers() {
  try {
    const data = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* usersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsers);
}

export default usersSaga;
