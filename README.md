## Introduction


- This is a Random Jokes Generator API.
- It features routes named `/`, `/general`, `/knock-knock`, and `/programming`.

- If you visit the `/` route, you will receive a joke from any category.
- If you visit the `/programming` route, you will receive a joke from the programming category.
- If you visit the `/general` route, you will receive a joke from the general category.
- If you visit the `/knock-knock` route, you will receive a joke from the knock-knock category.

## CMD

#### Install All Dependency
```bash
yarn install
```

#### Start Server
```bash
yarn start
```

#### Start Server With Hot Reload
```bash
yarn run dev
```

## Example

#### I am making a request to the `/programming` route.
```json
// It is Response
{
  "setup": "Why did the programmer quit his job?",
  "punchline": "Because he didn't get arrays."
}
```
#### I am making a request to the `/` route.
```json 
/*
It is Response

This is a general function that selects one of the following categories—General, Knock-knock, or Programming—and provides a joke response from the selected category.
*/
{
  "setup": "Did you hear about the bread factory burning down?",
  "punchline": "They say the business is toast."
}
```

#### I am making a request to the `/dsaddsa` route.
```json
// It is Response

// If a request is made to an incorrect URL, this response will be returned.
{
  "success": false,
  "available routes": [
    "/",
    "/general",
    "/programming",
    "/knock-knock"
  ],
  "message": [
    "Visit the `/` route for All Category jokes.",
    "Visit the `/general` route for general jokes.",
    "Visit the `/knock-knock` route for knock-knock jokes.",
    "Visit the `/programming` route for programming related jokes."
  ]
}
```