const jwtConfig = {
  access: {
    expiresIn: `${1000 * 10}`,
  },
  refresh: {
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;
