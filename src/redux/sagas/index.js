import { takeLatest, call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'
function* getAllPostsSaga(action) {
  try {
    const posts = yield call(api.getAllPosts);
    yield put(actions.getAllPosts.getAllPostsSuccess(posts.data.data.posts))
  }catch(err){ 
      yield put(action.getPosts.getAllPostsFailure(err))
  }
}
function* getPostSaga(action) {
  try {
    const post = yield call(api.getPost);
    yield put(actions.getPost.getPostSuccess(post.data.data.posts))
  }catch(err){ 
      yield put(action.getPost.getPostFailure(err))
  }
}
function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    yield put(action.createPost.createPostFailure(err.response.data.message));
  }
}
function* updatePostSaga(action) {
  try {
    const updatedpost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedpost.data));
  } catch (err) {
    yield put(action.updatePost.updatePostFailure(err));
  }
}
function* loginSaga(action) {
  try {
    const currentuser = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(currentuser.data));
  } catch (error) {
    yield put(action.login.loginFailure(error.response.data.message));
  }
}
function* registerSaga(action) {
  try {
    const register = yield call(api.register, action.payload);
    yield put(actions.register.registerSuccess(register.data));
    const currentuser = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(currentuser.data));
  } catch (err) {
    yield put(action.register.registerFailure(err.response.data.message));
  }
}
function* checkCurrentUserSaga(action) {
  try {
    const checkCurrentUser = yield call(api.checkCurrentUser, action.payload);
    yield put(actions.checkCurrentUser.checkCurrentUserSuccess(checkCurrentUser.data.data.user));
  } catch (err) {
    yield put(action.checkCurrentUser.checkCurrentUserFailure(err.response.data.message));
    console.log(err.response.data.message)
  }
}
function* mySaga(){
  yield takeLatest(actions.getAllPosts.getAllPostsRequest, getAllPostsSaga);
  yield takeLatest(actions.getPost.getPostRequest, getPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.login.loginRequest, loginSaga);
  yield takeLatest(actions.register.registerRequest, registerSaga);
  yield takeLatest(actions.checkCurrentUser.checkCurrentUserRequest, checkCurrentUserSaga);
}
export default mySaga;