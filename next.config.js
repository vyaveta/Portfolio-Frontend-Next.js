/** @type {import('next').NextConfig} */

require('dotenv').config()

const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

module.exports ={
  env:{
    NEXT_APP__SANITY_PROJECT_ID: 's24fwcb7',
    NEXT_APP__SANITY_TOKEN: 'sk9ecwEKixZczPXiToAN8vmiBhkX6DcaFiaUvKgVtplVPTVroS4e3k3WwIhnhaQFs4PiyZrYEEBbGNCuDmT91aGrYf34D6uHVpEF3t9GEVLvVUOUK3zo7yx92OnPyoyVoBQbLkH3TRRfz34ZR312PzGc1zkI72prA4JyDIipq8rEi4bdRIZo'
  }
}
