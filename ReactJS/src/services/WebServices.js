import {URL} from "../constants/index";

let jwtDecode = require('jwt-decode');
let __headers = {"Authorization": undefined, "Content-Type": "application/json"};

export const doLogin = (l, p) => new Promise((res, rej) => {
  fetch(URL.host + "/authenticate", {
    method: 'POST',
    headers: {
      ...__headers
    },
    body: JSON.stringify({'username': l, 'password': p})
  }).then(
    (resp) => {
      if(resp.status === 200) {
        return resp.json();
      }
      else {
        throw resp.status;
      }
    }
  )
    .then(
      (d) => {
        __headers.Authorization = "Bearer " + d;
        res(jwtDecode(d));
      }
    )
    .catch(
      (err) => {
        rej(err);
      }
    )
});


export const doChangePwd = (p) => new Promise((res, rej) => {
  fetch(URL.host + "/api/settings/updatepassword", {
    method: 'PUT',
    headers: {
      ...__headers
    },
    body: JSON.stringify({'password': p})
  }).then(
    (resp) => {
      if(resp.status === 200) {
        return resp.json();
      }
      else {
        throw resp.status;
      }
    }
  )
    .then(
      (result) => {
        res(result);
      }
    )
    .catch(
      (err) => {
        rej(err);
      }
    )
});

export const fetchAllQuestions = () => new Promise((res, rej) => {

  fetch(URL.host + "/api/question", {
    method: 'GET',
    headers: {
      ...__headers
    },
  }).then(
    (resp) => {
      if(resp.status === 200) {
        return resp.json();
      }
      else {
        throw resp.status;
      }
    }
  )
    .then(
      (questions) => {
        res(questions);
      }
    )
    .catch(
      (err) => {
        rej(err);
      }
    )
});
