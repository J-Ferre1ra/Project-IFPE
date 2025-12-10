class UserManager {
    constructor(validationStrategy) {
        this.users = [];
        this.validationStrategy = validationStrategy;
    }

    setStrategy(strategy) {
        this.validationStrategy = strategy;
    }

    addUser(user) {
        const result = this.validationStrategy.validate(user);

        if (!result.ok) {
            console.log("❌ Erro:", result.message);
            return false;
        }

        this.users.push(user);
        console.log("✅ Usuário cadastrado com sucesso!");
        return true;
    }

    listUsers() {
        return this.users;
    }
}

module.exports = UserManager;
