const jwt = require('jsonwebtoken');
const secretKey = 'skljaksdj9983498327453lsldkjf';

const nossoToken = jwt.sign(
    {
        email: 'nome@alura.com.br',
        password: 'HuEKW489!j445*',
    },
    secretKey,
    {
        expiresIn: '1y',
        subject: '1',
    }
);

console.log(nossoToken);

// Por padrão, o algoritmo de codificação é o HS256.

const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A';

console.log(jwt.decode(tokenGerado));