// equivalent to a trait in other languages

const HasUuid = (Base) =>
    class extends Base {
      generateUuid() {
        this.uuid = crypto.randomUUID();
      }
    };
  
  class User extends HasUuid(Object) {}

  const user = new User();
  user.generateUuid();
  console.log(user.uuid);