const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ //
            target: 'http://localhost:5000', // The api you want to sent to
            changeOrigin: true,  // default=false, This property can control the value of Host in request head at server end. Host is used to label which client send message.
            pathRewrite: {'^/api1': ''}  //Override the request path (Needed).
        }),
        proxy('/api2',{
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
})
    )
}