function formatMatricula(matricula) {
    if (!matricula) return '';
    return matricula.trim().toUpperCase().replace(/\s+/g, '');
}

module.exports = {
    formatMatricula
};