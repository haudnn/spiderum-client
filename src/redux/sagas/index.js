import { takeLatest, call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'
function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data.data.posts))
  }catch(err){ 
      yield put(action.getPosts.getPostsFailure(err))
  }
}
function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    yield put(actions.createPost.createPostFailure(err));
  }
}
function* updatePostSaga(action) {
  try {
    const updatedpost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedpost.data));
  } catch (err) {
    yield put(actions.updatePost.updatePostFailure(err));
  }
}
function* loginSaga(action) {
  try {
    const currentuser = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(currentuser.data));
  } catch (error) {
    yield put(actions.login.loginFailure(error.response.data.message));
  }
}
function* registerSaga(action) {
  try {
    const register = yield call(api.register, action.payload);
    yield put(actions.register.registerSuccess(register.data));
    const currentuser = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(currentuser.data));
  } catch (err) {
    yield put(actions.register.registerFailure(err.response.data.message));
  }
}
function* checkCurrentUserSaga(action) {
  try {
    const checkCurrentUser = yield call(api.checkCurrentUser, action.payload);
    yield put(actions.checkCurrentUser.checkCurrentUserSuccess(checkCurrentUser.data.data.user));
    // console.log(checkCurrentUser.data.data.user)
  } catch (err) {
    yield put(actions.checkCurrentUser.checkCurrentUserFailure(err.response.data.message));
    console.log(err.response.data.message)
  }
}

function* mySaga(){
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.login.loginRequest, loginSaga);
  yield takeLatest(actions.register.registerRequest, registerSaga);
  yield takeLatest(actions.checkCurrentUser.checkCurrentUserRequest, checkCurrentUserSaga);

}
export default mySaga;