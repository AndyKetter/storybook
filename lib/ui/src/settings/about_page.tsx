import { history } from 'global';
import React, { Component } from 'react';

import { Route } from '@storybook/router';
import { Consumer, API, Combo } from '@storybook/api';

import AboutScreen from './about';

// Clear a notification on mount. This could be exported by core/notifications.js perhaps?
class NotificationClearer extends Component<{ api: API; notificationId: string }> {
  componentDidMount() {
    const { api, notificationId } = this.props;
    api.clearNotification(notificationId);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default () => (
  <Consumer>
    {({ api }: Combo) => (
      <NotificationClearer api={api} notificationId="update">
        <AboutScreen
          current={api.getCurrentVersion()}
          latest={api.getLatestVersion()}
          onClose={() => history.back()}
        />
      </NotificationClearer>
    )}
  </Consumer>
);
