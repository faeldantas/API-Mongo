const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Acesso não autorizado');
    // Aqui você verificaria o token
    next();
};

module.exports = authenticate;
