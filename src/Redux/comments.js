import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";
// comments reducer

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log("comment: ", comment);
      return state.concat(comment);
    default:
      return state;
  }
};
