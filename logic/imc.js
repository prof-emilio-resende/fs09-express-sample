function calculateImc(height, weight) {
    return weight / height ** 2;
}

function translateImc(imc) {
    if (imc < 18.5) return "magreza";
    if (imc < 24.9) return "normal";
    if (imc < 30.0) return "sobrepeso";
    return "obesidade";
}

function calculateAndTranslate(height, weight) {
    const imc = calculateImc(height, weight);
    const imcDescription = translateImc(imc);
    return {
        imc,
        imcDescription,
    };
}

module.exports = {
    calculateImc,
    translateImc,
    calculateAndTranslate,
};
