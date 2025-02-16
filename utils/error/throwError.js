import { statusUmum } from '../statusCode.js';

const throwError = (status, message) => {
  const error = new Error(message || statusUmum[status] || 'Unknown Error');
  error.status = status;
  throw error;
};

export default throwError;
