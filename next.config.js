
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: '',
        mongodb_password: '',
        mongodb_clustername: '',
        mongodb_database: '',

      }
    }
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'dmytro',
      mongodb_password: '150673',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'project2',

    }
  }


}
