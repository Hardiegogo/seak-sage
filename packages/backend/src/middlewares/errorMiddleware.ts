import {ErrorRequestHandler } from "express";

export const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  next(err);
};
export const customErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ message: "Something is broken in the server" });
};
