import NotificationService from '../services/NotificationService';

/**
 * Wrapper around servise axios request
 * Does the call to the backend, checks for successfull return and returns data
 * if Failed, notifies the user
 * @param {Function} requestFunc
 * @returns Object
 */
const serviceRequestWrapper = async (
  requestFunc,
  successStatusCode = 200,
  showNotification = true,
) => {
  try {
    const response = await requestFunc();
    if (response.status === successStatusCode) {
      return response.data;
    }
    throw new Error(`Server response: ${response.status} - ${response.statusText}`);
  } catch (err) {
    if (showNotification) {
      NotificationService
        .notifyError((err.response.data && err.response.data.error) || err.message);
    }
    throw err;
  }
};

export default serviceRequestWrapper;
