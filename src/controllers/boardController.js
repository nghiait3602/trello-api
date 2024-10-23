/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import { boarService } from '~/services/boardService';

const createNew = async (req, res, next) => {
  try {
    console.log(req.body);

    // điều hướng dữ liệu sang services
    const createBoard = await boarService.createNew(req.body);

    //Có kết quả thì trả về phía client
    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error); // chuyển lỗi đến middleware
  }
};

export const boardController = { createNew };
