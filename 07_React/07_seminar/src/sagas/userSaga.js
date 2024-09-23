import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../Redux/userReduser";

async function fetchUsersApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return await response.json();
  //   return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  //     response.json()
  //   );
}

function* fetchUsers() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* usersSaga() {
  yield takeEvery(fetchUsersRequest.title, fetchUsers);
}
export default usersSaga;
