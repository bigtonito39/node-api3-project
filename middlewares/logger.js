// This would be like creating the morgan middleware, but now ill make it custom


module.exports = (format) => {
    return (req, res, next) => {
        const ip = req.ip;
        const method = req.method;
        const url = req.url
        const agent = req.get("user-agent")
      
        //this logic is pretty much allowing us to either log the long way or short way
        if (format === "short") {
            console.log(`${method} ${url}`)
        } else {
            console.log(`${ip} ${method} ${url} ${agent}`)
        }
      
next() // You have call next either to finish middleware or to move to next one
    }
}