Commands:

To start Angular application:
npm start

To start the angular Deno server : 
cd /backend-server
deno run --allow-net server.ts --port=8081


Comments:
1)Implimented the application as mentioned in the 'frontend-challenge.md'😎
2)Bonus task: The issue was with 'Rand Miller', reason for the issue was that the Id was invalid,
 hence it failed to validate at 'UUID.validate(id)' causing internal server error. fixed it.🤓
 original Id: 89a0cd0525fb4b6ea8f8fc2187f690d0
 fixed Id: 89a0cd05-25fb-4b6e-a8f8-fc2187f690d0
