import Axios from 'axios'

import {redirectToLogin} from './redirectHook';

export function getTask(taskId, history) {
  return Axios.get('/api/task/' + taskId)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}


export function updateTask(task, history) {
  return Axios.post('/api/task/' + task._id, task)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}

export function deleteTask(taskId, history) {
  return Axios.delete('/api/task/' + taskId)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}

export function newTask(task, history) {
  return Axios.post('/api/task/new', task)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}

export function commentOnTask(taskId, commentText, history) {
  return Axios.post('/api/task/' + taskId + '/comment', {comment: commentText})
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return JSON.parse(JSON.stringify(res.data));
      }
    }).catch((err) => {
      return JSON.parse(JSON.stringify(err.response.data));
    })
}
