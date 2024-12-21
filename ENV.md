# NODE_ENV=production
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://asifaowadud:sof6vxfRNfUEvdCg@cluster0.gjcwx8p.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0

<!-- const salt = await bcrypt.genSalt(10); -->

BCRYPT_SALT_ROUNDS=$2b$10$XvOECwY0sI0YNkhPTz4V8u9dpGJm8yZT6lJbIkQXtIAk5sFc5X8AO
DEFAULT_PASS=securepassword
<!-- require("crypto").randomBytes(64).toString('hex') -->
JWT_ACCESS_SECRET=00199f5c7321f6732612f7030b1d3067418aa3080f1885ce27185a3c19508b894563c379fbf9e8dd947b1309aba090c9eeda97caf3
707687c26254a57cc61311
JWT_REFRESH_SECRET=eb961fad0490201f87b7a0f751599e73d299167762d98746bc12fe00dbe9384c23eb4ee397be83c49ebf368d4a6730ba4b55851aa4
76aae65ae46b740845aa25
JWT_ACCESS_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=30d