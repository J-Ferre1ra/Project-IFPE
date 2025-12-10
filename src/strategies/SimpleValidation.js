class SimpleValidation {
    validate(user) {
        if (!user.email.includes("@")) {
            return { ok: false, message: "Email inválido" };
        }
        if (user.password.length < 4) {
            return { ok: false, message: "Senha curta demais" };
        }
        return { ok: true };
    }
}

module.exports = SimpleValidation;
