const dailyexercise = require('../media/projects/dailyexercise.jpg');
const learninglab = require('../media/projects/learninglab.jpg');
const translator = require('../media/projects/translator.jpg');

const projectdata = [
    {
        "id": 1,
        "name": "DailyExercise",
        "stack": "Python",
        "img": dailyexercise,
        "github": "https://github.com/plutoniumcat/DailyExercise",
        "desc": "Terminal application for tracking exercise routines.",
        "tags": ["python"]
    },
    
    {
        "id": 2,
        "name": "LearningLab",
        "stack": "Python, Flask, SQLAlchemy, Marshmallow, PostgreSQL",
        "img": learninglab,
        "github": "https://github.com/plutoniumcat/learninglab",
        "desc": "REST API for curating lists of tutorials.",
        "tags": ["python", "flask", "SQL", "API", "web"]
    },

    {
        "id": 3,
        "name": "Translator",
        "stack": "JavaScript, React, Bootstrap, Tessaract.js",
        "img": translator,
        "github": "https://github.com/plutoniumcat/react-translation-app",
        "desc": "Front-end for LibreTranslate API that accepts text file and image uploads",
        "tags": ["JavaScript", "React", "Bootstrap", "web"]
    }
];

export default projectdata;