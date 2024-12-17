function apiResponse(status, code, error, message, data) {
  return {
    status: status,
    code: code,
    error: error,
    message: message,
    data: data,
  };
}

export default apiResponse;
