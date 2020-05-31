import React from 'react';
import { Redirect } from 'react-router-dom';

import { apiPath } from '../constants/apiPathes';

class HttpService {
  static parseResponse(response) {
    if (response.status === 401) {
      return <Redirect to="/login" />;
    }
    if (!response.ok) {
      return Promise.reject(response);
    } else {
      return response;
    }
  }

  static request(url, options) {
    return fetch(`${apiPath}/${url}`, options).then((response) => this.parseResponse(response));
  }

  static get(url) {
    return this.request(url);
  }

  static post(url, data) {
    return this.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}

export { HttpService };
