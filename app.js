process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ')
process.stdin.on('data', (text) => {
    if (text>99) {
        console.log('you can\'t be older than 99, what\s your age again?')
    }else if (text<0) { 
        console.log('your age can\'t be negative, what\s your age again?')
    }else{
        console.log('You are born on ' + ('2020'-text))
        process.exit()
    }
})