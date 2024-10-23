import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

const createNew = async (req, res, next) => {
  const correctCodition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required (trungnghia) ',
      'string.empty': 'Title is empty (trungnghia) ',
      'string.min': 'Title min 3 chars (trungnghia) ',
      'string.max': 'Title max 50 chars (trungnghia) ',
      'string.trim':
        'Title must not have leading or tranling whitespace (trungnghia) ',
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });

  try {
    // console.log(req.body);

    // set abortEarly: false chỉ định, trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
    await correctCodition.validateAsync(req.body, { abortEarly: false });
    // next();
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POS from Validation: API create new boards' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message,
    });
  }
};

export const boardValidation = { createNew };
