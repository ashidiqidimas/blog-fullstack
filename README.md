# BlogU

## Starting Guide
1. Generate the database model and the seeder
```shell
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
This will generate 1 user and 3 posts that belongs to that user.  
If you want to log in as that user, use:  
> email: example@mail.com  
> password: password123
2. Run the backend server
```shell
cd backend
npm start
```
3. Run the React app
```shell
cd ../frontend #only if you still in /backend
npm start
```

## Documentation
For API reference, open http://localhost:8000/api-docs/ 