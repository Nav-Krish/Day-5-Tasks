//2.Create your own resume data in JSON format

//create resume as object
var resume={
    Basics:{
        Name: "Navaneetha Krishnan",
        Email: "navanethakrishnan11@gmail.com",
        Phone: 9597720177,
        Degree: "M.Tech(Int.)",
        Location:{
            Address: "37/1, Sheikh madar nagar south, Gandinagar",
            City: "Tirunelveli",
            State: "Tamil Nadu",
            PinCode: 627008,
            Country: "India"
        },
        Profiles:{
            Github: "https://github.com/Nav-Krish"
        }

    },
    Education:{
        Degree: "M.tech(Int.)",
        Institution: "SASTRA University",
        Department: "Instrumentation & Control",
        Year: "2015-2020",
        GPA: 7.75
    },
    Skills:{
        Name: "C++, JavaScript",
        Level: "Beginner",
        Project: "Design of IMC controller for Coriolis flow meter"
    },
    Languages:{
        Language: "Tamil, English, Hindi",
        Level: "Fluent, Fluent, Beginner"
    },
    Interests:{
        Name: "Reading books, Comics"
    }
}
// resume object-->JSON
var resumeJSON=JSON.stringify(resume)
console.log(resumeJSON)