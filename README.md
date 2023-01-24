# Fast Typist Client

Fast Typist is a browser-based typing game that allows you to practice your typing skills! You must type a given word in no more than a given timelimit, if you type it correctly, your score increases, a new word gets generated, and the timer is reset. Otherwise, you :x:lose:x:!!

This project is still under development, and it consumes the REST API and WebSocket Server provided by the [Fast Typist Backend Project](https://github.com/zSorour/fast-typist-backend).

## Features

#### :white_check_mark: Practice Game Mode

Without having to log in, the player can start a client-based game session where their top score is automatically stored in the browser Local Storage. All the logic of the practice mode is handled on the client-side, there is no need to deal with the overhead of the connection between the backend and the client since this gamemode isn't included in any scoreboard and player scores aren't considered officially in the game. Therefore, even if a player exploits the the browser land to maliciously input high scores, they won't be considered and it would be only on their local storage.

#### :white_check_mark: Single Player Game Mode

After logging in, the player initiates a WebSocket connection to the backend server where the client immediately receives a set of words. In this case, all the logic of generating new words, validating word inputs, calculating score, timers, and everything is done on the server side. The WebSocket connection is used to synchronize the frontend with the backend state in real time via SocketIO.

Sample flow of events:
![alt text](https://am3pap007files.storage.live.com/y4mKx12OjjODQQnLDh9I6DwJiduWu1Tl6Nqf9Cf1ZKvKI4jEDTsy-xG-Y0axG-tDlPJ80-mSq3pI46bl43dPky0ZnXBRI_zqq8XcY9dB6XvFJa8w0MzhFfm-Du-o3Rs6Jn8AUSLt9AZW0QxbiNkoThjPZ6a9Bo0CabmVXeZ3TiShng4mb-mMfyIbGQ4p2_ayw13?width=5147&height=4647&cropmode=none 'Sample Flow Of Events')

#### :watch: [Next Release] Multiplayer Game Mode

Players would be able to create rooms, and send an invitiation link to their colleagues. They can then start the game, compete with each other to get the highest score without missing a word under a given timelimit! All the logic is also handled in the backend side, the frontend in this case is only responsible to reflect the backend state on the client efficiently.

#### :watch: [Planned Feature] Scoreboard

Players should be able to view a scoreboard of top scores in different time limits, search for a player's top score, sort by score, etc.

## Technologies:

- TypeScript
- NextJS (React)
- SocketIO
- Zustand for State Management
- TailwindCSS for Styling

## Demo Screenshots

- Practice Game Mode:
  ![alt text](https://am3pap007files.storage.live.com/y4mgs5n0Ux9zx6y4oPazBDLxhO85PNvVi-BIl4VCMT_aRsqMCVzKKDFHs_GiCaMLL0sqey5YJMJ4vIIjf6Tf-qabANq_Tv2Ba5seQ8PQofGan1H_Yzr3HZfAGfgFU5-d4mpb1ME1CnpL-mklOCKeJqz3yJVUhUsIPirsrci-XvxkGX-wJ3Yrqi2kSwAE-xs5Wyf?width=1154&height=1004&cropmode=none 'Login Screen')
- Login Screen:
  ![alt text](https://am3pap007files.storage.live.com/y4mPL7OqVLQ63S4ldUPlf_YNcFm54wNC1tNl-TXHPVzzO94AzCJj1i6hfi7eaVM6JP5-foeWEdNo-RWnHN9qgtKXUgjwH9dK3TqU4p-7uJv-8qU8D1mZe16QfLSbVu6eFHw8CvFw4lw7X6S9bUmVl1K9x96SzLAbT1CCb3OnQ-Lk0830OLxGGCGjVH-Tqz45xm7?width=1147&height=1000&cropmode=none 'Login Screen')
