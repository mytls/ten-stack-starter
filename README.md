# ten-stack-starter

Typescript + Express.js + Node.js Starter with best practice structure

🦺Safety when developing with liners.

🔥Easy test with mocha & chai & supertest.

🚀The best structure of a good project.

👨‍💻Use dependency injection to improve code quality.

🔄A live project template that is constantly being updated

---

_This structure is designed for large-scale projects, but you can also use it for small projects_

_The complexity of projects is greatly reduced_

### Structure and layers

**Controller Layer**

- It is solely responsible for managing requests

**Checkpoint layer**

- It is only responsible for managing the input data and its validation

**Service Layer**

- This is only the function of business logic

**Data Access Layer ( DAL )**

- It only has the task of communicating with the database like crud

---

**Easy installation and use**

```npm
npm i -g mmdzov-cli
```

```npm
mmdzov use ten <project-name>
```

**Add New Resource**

 - Creates a complete template of a component that contains several files.
Exactly the same as the resource in nest.js 

```npm
mmdzov ten res <resource-name>
```
> like : mmdzov ten res shop


[more...](https://github.com/mmdzov/mmdzov-cli)

**Clone**

```npm
git clone https://github.com/mytls/ten-stack-starter.git
```

_or_

```npm
npm i -g degit
```

```npm
degit https://github.com/mytls/ten-stack-starter.git project-name
```

**build**

```npm
npm run build
```

**Run dev**

```npm
npm start
```

**Test**

```npm
npm run test
```

**Test Watch**

```npm
npm run test:watch
```

**Lint**

```npm
npm run lint
```
