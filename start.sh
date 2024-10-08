#!/bin/sh

# Replace environment variables in the main.js file
sed -i 's|PLACEHOLDER_baseUrl|'"${baseUrl}"'|g' /app/dist/main.js
sed -i 's|PLACEHOLDER_apiClientSecret|'"${apiClientSecret}"'|g' /app/dist/main.js
sed -i 's|PLACEHOLDER_clientSecret|'"${clientSecret}"'|g' /app/dist/main.js
sed -i 's|PLACEHOLDER_apiClientId|'"${apiClientId}"'|g' /app/dist/main.js
sed -i 's|PLACEHOLDER_clientId|'"${clientId}"'|g' /app/dist/main.js

# Replace environment variables in the environment.ts file
sed -i 's|PLACEHOLDER_baseUrl|'"${baseUrl}"'|g' /app/src/environments/environment.ts
sed -i 's|PLACEHOLDER_apiClientSecret|'"${apiClientSecret}"'|g' /app/src/environments/environment.ts
sed -i 's|PLACEHOLDER_clientSecret|'"${clientSecret}"'|g' /app/src/environments/environment.ts
sed -i 's|PLACEHOLDER_apiClientId|'"${apiClientId}"'|g' /app/src/environments/environment.ts
sed -i 's|PLACEHOLDER_clientId|'"${clientId}"'|g' /app/src/environments/environment.ts

# Replace environment variables in the main.js file
sed -i 's|PLACEHOLDER_baseUrl|'"${baseUrl}"'|g' /app/src/environments/environment.prod.ts
sed -i 's|PLACEHOLDER_apiClientSecret|'"${apiClientSecret}"'|g' /app/src/environments/environment.prod.ts
sed -i 's|PLACEHOLDER_clientSecret|'"${clientSecret}"'|g' /app/src/environments/environment.prod.ts
sed -i 's|PLACEHOLDER_apiClientId|'"${apiClientId}"'|g' /app/src/environments/environment.prod.ts
sed -i 's|PLACEHOLDER_clientId|'"${clientId}"'|g' /app/src/environments/environment.prod.ts


echo 'vars updated'

# Start the Angular app
ng serve --configuration=production --host 0.0.0.0 --port 8080