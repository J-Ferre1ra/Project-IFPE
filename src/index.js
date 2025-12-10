const User = require('./User');
const UserManager = require('./UserManager');

const SimpleValidation = require('./strategies/SimpleValidation');
const StrictValidation = require('./strategies/StrictValidation');

// Começa com validação simples
const manager = new UserManager(new SimpleValidation());

console.log("=== Testando validação simples ===");

manager.addUser(new User("João", "joao@gmail.com", "1234"));  
manager.addUser(new User("Maria", "mariaemail.com", "pass"));  

console.log("\nUsuários cadastrados:");
console.log(manager.listUsers());

// Trocando estratégia para  uma validação mais rigorosa
manager.setStrategy(new StrictValidation());

console.log("\n=== Testando validação rigorosa ===");

manager.addUser(new User("Ana", "ana@gmail.com", "SenhaFraca"));
manager.addUser(new User("Lucas", "lucas@hotmail.com", "Fort3Pass"));
