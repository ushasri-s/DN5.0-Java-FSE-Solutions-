import Trainer from "./trainer";

const trainers = [
    new Trainer(
        1,
        "John Doe",
        "john@email.com",
        "9876543210",
        "Java",
        ["Core Java", "Spring Boot"]
    ),

    new Trainer(
        2,
        "Ushasri",
        "usha@email.com",
        "9876543211",
        "React",
        ["React", "JavaScript", "HTML", "CSS"]
    ),

    new Trainer(
        3,
        "Jane Smith",
        "jane@email.com",
        "9876543212",
        "Python",
        ["Python", "Django", "Flask"]
    )
];

export default trainers;