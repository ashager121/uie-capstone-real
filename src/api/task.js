import Axios from 'axios'

import { redirectToLogin } from './redirectHook';
import { fixDate, parseObj } from './apiUtil';

export function getTask(taskId, history) {
  return Axios.get('/api/task/' + taskId)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        var task = parseObj(res.data);
        task.data.dueDate = fixDate(task.data.dueDate);
        return task;
      }
    }).catch((err) => {
      return parseObj(err.response.data);
    })
}


export function updateTask(task, history) {
  return Axios.post('/api/task/' + task._id, task)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        var task = parseObj(res.data);
        task.data.dueDate = fixDate(task.data.dueDate);
        return task;
      }
    }).catch((err) => {
      return parseObj(err.response.data);
    })
}

export function deleteTask(taskId, history) {
  return Axios.delete('/api/task/' + taskId)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        return parseObj(res.data);
      }
    }).catch((err) => {
      return parseObj(err.response.data);
    })
}

export function newTask(task, history) {
  return Axios.post('/api/task/new', task)
    .then(res => {
      if (!redirectToLogin(history, res)) {
        var task = parseObj(res.data);
        task.data.dueDate = fixDate(task.data.dueDate);
        return task;
      }
    }).catch((err) => {
      return parseObj(err.response.data);
    })
}

export function commentOnTask(taskId, commentText, history) {
  return Axios.post('/api/task/' + taskId + '/comment', { comment: commentText })
    .then(res => {
      if (!redirectToLogin(history, res)) {
        var task = parseObj(res.data);
        task.data.dueDate = fixDate(task.data.dueDate);
        return task
      }
    }).catch((err) => {
      return parseObj(err.response.data);
    })
}
