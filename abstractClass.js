// there are no abstract classes in JavaScript, but we can achieve the same effect using the following pattern:

class BaseService {
    constructor() {
      if (new.target === BaseService) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    log(message) {
      console.log(message);
    }
  
    execute() {
      throw new Error("Must implement execute()");
    }
  }

  class ConcreteService extends BaseService {
    execute() {
      console.log("Executing concrete service");
    }
  }

  const concreteService = new ConcreteService();
  concreteService.execute();
  concreteService.log("Log message");