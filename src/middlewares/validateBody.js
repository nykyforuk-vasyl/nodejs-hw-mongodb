import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Invalid ID or data format', {
      message:
        'Please ensure all provided data, including IDs, are in the correct format.',
    });
    next(error);
  }
};
