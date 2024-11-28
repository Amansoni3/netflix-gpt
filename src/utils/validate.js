export const checkValidation = (email, password) => {
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    if (!validateEmail) return "Email Id is not valid !"
    if (!validatePassword) return "Enter a valid password !"
    return null
}