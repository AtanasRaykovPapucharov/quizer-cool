import fs from 'fs'
import path from 'path'

// Base directory of the data folder
const baseDir = path.join(__dirname, '/data/')

// Write data to a file
export function createJson (file: any, data: any) {
    // Open the file for writing
    console.log('DIR: ' + baseDir + file + '.json')
    fs.open(baseDir + file + '.json', 'wx', function (error, fileDescriptor) {
        if (!error && fileDescriptor) {
            // Convert data to a string
            var stringData = JSON.stringify(data)

            fs.writeFile(fileDescriptor, stringData, function (error) {
                if (!error) {
                    fs.close(fileDescriptor, function (error) {
                        if (!error) {
                            console.log(false)
                        } else {
                            console.log('Error closing new file')
                        }
                    })
                } else {
                    console.log('Error writing to new file')
                }
            })
        } else {
            console.log('Could not create new file it already exists')
        }
    })
}

export function writeJson(file: string, data: string) {
    fs.writeFileSync(file, data)
}