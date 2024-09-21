/*
1. npm init -y
//express, mongoose, typescript, cros, dotEnv
2. npm install express
3. npm install mongoose --save
4. npm install typescript --save-dev
5. npm i cros
6. npm i dotenv

then For typescript : we have to create a typescript json file; 
7. tsc --init
{
    rootDir: './src'
    outDir : './dist'
}

start project from here : 
to conver typescript to js : 
    goto package.json > scripts > "build" : "tsc" || and then, npm run build. 

-----------------------------------------------
then we devide app.ts and sever.ts 

In server.ts: =-------------------------------->
import app from "./app";
import config from "./app/config";
import mongoose from 'mongoose'




async function main() {
    
    try{
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
        
    }
    catch(error){
        console.log(error);
    }
}
-------------------------------------------------------------> 
.env file ---------------------------------------------- > 

----------------------------------------------------
app.ts -----------------
**** npm i --save-dev @types/cors ***** 










----------------------------------------------

eslint & prettier:
{
https://blog.logrocket.com/linting-typescript-eslint-prettier/
}
shortcut :  add to tsconfig.json ----------------------

"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip

then : 
1 npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
2. npx eslint --init
{
    y, 
    enter, 
    enter, 
    none of this, 
    yes, 
    node,
    yes, 
    npm
}





prettier:
* npm install --save-dev prettier
* script: 

then setting.json()
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
}
then : 
npm install --save-dev eslint-config-prettier










-------------------------------
to direct use typescript file : 
npm i ts-node-dev
npx ts-node-dev --respawn --transpile-only server.ts

*/

/*
--------------------------------------
validation : 


npm package : 

npm i validator
npm i @types/validator

{
https://github.com/validatorjs/validator.js
}
{import validator from 'validator';}

validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
},

joi package :
---------------------
npm i joi
{
    https://joi.dev/api/?v=17.13.3
}

*/
