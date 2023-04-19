const {readFile , writeFile} = require('fs')

console.log('start')
const a1 = readFile('file1.txt','utf-8', (err,result)=>{
    if(err)
    {
        console.log('I found an error')
        return 
    }
    const first = result
    readFile('file2.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return 
        }
        const second = result
        writeFile(
            'file3.txt',`Here is the result: ${first}, ${second}`,
            (err,result) => {
                if(err)
                {
                    console.log(err)
                    return 
                }
                console.log('result')
            }
        )
    })
})
console.log("Big B")
console.log(a1)
