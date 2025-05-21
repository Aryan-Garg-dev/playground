
type IResponse<T> = {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
  status: number;
};

import { Response } from "express";

export const sendResponse = <T>(res: Response, response: IResponse<T>) => {
  if (response.success) {
    return res.status(response.status).json({
      success: true,
      message: response.message,
      data: response.data,
    });
  } else {
    return res.status(response.status).json({
      success: false,
      error: response.error,
      data: response.data,
    });
  }
};
