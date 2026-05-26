
const joke_title_is_valid = (jokeTitle) => {
   switch (jokeTitle) {
      case "knock-knock":
      case "general":
      case "programming":
         break;
      default:
         throw {
            msg: {
               "available routes": ["/", "/general", "/programming", "/knock-knock"],
               message: [
                  "Visit the `/` route for All Category jokes.",
                  "Visit the `/general` route for general jokes.",
                  "Visit the `/knock-knock` route for knock-knock jokes.",
                  "Visit the `/programming` route for programming related jokes."
               ]
            },
            status: 404
         }
   }
}

export { joke_title_is_valid }