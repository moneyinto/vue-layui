import axios from 'axios';
import Vue from 'vue';
import { router } from '../router';

const baseUrl = '/api';

const _get = url => {
    url = baseUrl + url;
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(response => {
            _success(response.data, resolve);
        })
        .catch((err) => {
            console.log(err);
        });
    });
};

const _post = async (url, data) => {
    url = baseUrl + url;
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(response => {
            _success(response.data, resolve);
        })
        .catch((err) => {
            console.log(err);
        });
    });
};

const _success = (response, resolve) => {
    switch (response.code) {
    case 401:
        Vue.prototype.$layer.msg(response.msg);
        router.replace('/login');
        break;
    case 404:
        break;
    case 200:
        resolve(response);
    }
};

export default {
    get: _get,
    post: _post
};
