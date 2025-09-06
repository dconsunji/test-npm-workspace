# Usecaser

## Usage

### Declaration

Manual Declaration

```ts
const user1 = defineActor('user1');

const systemUsers = defineBoundary('System', 'User');

const createUserUsecase = defineUsecase(
   'I can create User',
   systemUsers,
   async (userName: string) => {
      // TODO: implement logic
   },
);

const updateUserUsecase = defineUsecase(
   'I can update User',
   systemUsers,
   async (userId: number, updates: UserModel) => {
      // TODO: Implement logic
   },
);

const user1Access = defineAccess(user1, [createUserUsecase, updateUserUsecase]);
```

Target Declaration

```ts
As('user').Ican('create User').on('Database:User');
```
