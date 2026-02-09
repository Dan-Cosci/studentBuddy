/**
 * Custom AppError class for consistent error handling
 * Extends the native Error class with additional properties
 */
export class AppError extends Error {
  /**
   * Create a new AppError
   * @param {string} message - Error message
   * @param {number} statusCode - HTTP status code
   * @param {boolean} isOperational - Whether error is operational (true) or programming (false)
   * @param {string} code - Custom error code for client handling
   */
  constructor(message, statusCode = 500, isOperational = true, code = null) {
    super(message);
    
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = isOperational;
    this.code = code || this.getDefaultCode(statusCode);
    
    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
  
  /**
   * Get default error code based on status code
   * @param {number} statusCode - HTTP status code
   * @returns {string} Default error code
   */
  getDefaultCode(statusCode) {
    const codes = {
      400: 'BAD_REQUEST',
      401: 'UNAUTHORIZED',
      403: 'FORBIDDEN',
      404: 'NOT_FOUND',
      409: 'CONFLICT',
      422: 'VALIDATION_ERROR',
      429: 'TOO_MANY_REQUESTS',
      500: 'INTERNAL_SERVER_ERROR',
      503: 'SERVICE_UNAVAILABLE'
    };
    
    return codes[statusCode] || 'UNKNOWN_ERROR';
  }
}

/**
 * Common error factory functions for consistent error creation
 */
export const ErrorFactory = {
  /**
   * Create a bad request error (400)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Bad request error
   */
  badRequest: (message = 'Bad request', code = null) =>  
    new AppError(message, 400, true, code),
  
  /**
   * Create an unauthorized error (401)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Unauthorized error
   */
  unauthorized: (message = 'Unauthorized access', code = null) => 
    new AppError(message, 401, true, code),
  
  /**
   * Create a forbidden error (403)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Forbidden error
   */
  forbidden: (message = 'Forbidden access', code = null) => 
    new AppError(message, 403, true, code),
  
  /**
   * Create a not found error (404)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Not found error
   */
  notFound: (message = 'Resource not found', code = null) => 
    new AppError(message, 404, true, code),
  
  /**
   * Create a conflict error (409)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Conflict error
   */
  conflict: (message = 'Resource conflict', code = null) => 
    new AppError(message, 409, true, code),
  
  /**
   * Create a validation error (422)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Validation error
   */
  validation: (message = 'Validation failed', code = null) => 
    new AppError(message, 422, true, code),
  
  /**
   * Create an internal server error (500)
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Internal server error
   */
  internal: (message = 'Internal server error', code = null) => 
    new AppError(message, 500, true, code),
  
  /**
   * Create a custom error with specified status code
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {string} code - Custom error code
   * @returns {AppError} Custom error
   */
  create: (statusCode, message, code = null) => 
    new AppError(message, statusCode, true, code)
};