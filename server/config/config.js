/*const config = {
    production:{
        SECRET: 'SLDKF0DF8AD8GSC343434',
        DATABASE: 'mongodb://andrew:password@ds113358.mlab.com:13358/afmongotest',
        PORT: 3000
    },
    default:{
        SECRET: 'SLDKF0DF8AD8GSC343434',
        DATABASE: 'mongodb://andrew:password@ds113358.mlab.com:13358/afmongotest',
        PORT: 3000
    }
} 

exports.get = function get(env){
    return config[env] || config.default
}*/



const config = {
    production:{
        /*SECRET: process.env.SECRET,
        DATABASE:process.env.MONGODB_URI,
        PORT: process.env.PORT*/
        SECRET: 'SLDKF0DF8AD8GSC343434',
        DATABASE: 'mongodb://onnx-admin:password@ds221228.mlab.com:21228/onnx-portal-dev',
        PORT: 3000
    },
    default:{
        SECRET: 'SLDKF0DF8AD8GSC343434',
        DATABASE: 'mongodb://onnx-admin:password@ds221228.mlab.com:21228/onnx-portal-dev',
        PORT: 3000
    }
} 

exports.get = function get(env){
    return config[env] || config.default
}