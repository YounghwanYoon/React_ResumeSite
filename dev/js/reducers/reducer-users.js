/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            name: "Squirrel College",
            description: "This is a financial aid app for UC and CSU.",
            url: "https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints",
            thumbnail:"https://lh3.googleusercontent.com/9GnCRKDTLpLQQA-_fcbFluORvqjcaFwASmvg-lmqZoMxjZY3TIyD4DoBHY3Dd-waGSQl=s180-rw"
        },
        {
            id: 2,
            name: "Angel_Shield",
            description: "Joby loves the Packers, cheese, and turtles.",
            url:"www.google.com" ,
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        
    ]
}
