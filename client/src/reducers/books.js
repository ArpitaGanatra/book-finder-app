export default (books = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...books, action.payload];
    default:
      return books;
  }
};
