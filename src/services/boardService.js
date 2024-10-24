/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters';
import { boardModel } from '~/models/boardModel';

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    const createBoard = await boardModel.createNew(newBoard);
    // trong service luôn phải có return
    const getNewBoard = await boardModel.findOneById(createBoard.insertedId);

    return getNewBoard;
  } catch (error) {
    throw error;
  }
};

export const boarService = { createNew };
