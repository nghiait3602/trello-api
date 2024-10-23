/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters';

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };

    // trong service luôn phải có return
    return newBoard;
  } catch (error) {
    throw error;
  }
};

export const boarService = { createNew };
