class StrictValidation {
    validate(user) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const strongPass = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!emailRegex.test(user.email)) {
            return { ok: false, message: "Email inválido (formato incorreto)" };
        }
        if (!strongPass.test(user.password)) {
            return { ok: false, message: "Senha fraca (mín. 6 chars, 1 número e 1 maiúscula)" };
        }
        return { ok: true };
    }
}

module.exports = StrictValidation;
