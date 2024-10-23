/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';

const createNew = async (req, res, next) => {
  try {
    console.log(req.body);

    // điều hướng dữ liệu sang services

    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POS from Controller: API create new boards' });
  } catch (error) {
    next(error); // chuyển lỗi đến middleware
  }
};

export const boardController = { createNew };
