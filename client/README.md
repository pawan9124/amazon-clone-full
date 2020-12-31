//Start the project
//local

cd amazon clone
-> open two terminal
-> 1. npm start
-> 2. firebase emulators:start
-->3. copy http function initialized (http://localhost:5001/clone-a469f/us-central1/api). may be different
--> 4. paste on axios.js baseURL
--> firebase deploy
cloud function --->cd functions> firebase deploy --only functions
frontend ---> firebase deploy --only hosting
