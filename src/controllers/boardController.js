/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import { boarService } from '~/services/boardService';

const createNew = async (req, res, next) => {
  try {
    // điều hướng dữ liệu sang services để xữ lý logic
    const createBoard = await boarService.createNew(req.body);
    console.log(createBoard);
    //Có kết quả thì trả về phía client
    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error); // chuyển lỗi đến middleware
  }
};

export const boardController = { createNew };
