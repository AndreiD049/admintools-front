import React from 'react';
import { DefaultButton } from '@fluentui/react';
import axios from 'axios';
import NotificationService from './NotificationService';

const LoginService = {
  currentUserPath: '/api/me',
  async getCurrentUser() {
    try {
      const response = await axios.get(this.currentUserPath);
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (err) {
      NotificationService.notify(`Not logged in. ${(err.response.data && err.response.data.error) || err.message}`,
        'error', (
          // eslint-disable-next-line react/jsx-filename-extension
          <DefaultButton
            as="a"
            href="/auth/login"
          >
            Log in
          </DefaultButton>));
      return null;
    }
  },
};

export default LoginService;
