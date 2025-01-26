import { useState } from "react";

const useProjects = () => {
    const [projects] = useState([
        {
            id: 1,
            href: "#",
            imgSrc: "/projects/p1.png",
            icon: { name: "bar-chart-alt-2", color: "black", background: "#a9ff5c" },
            title: "Forge",
            description: "Sales & Marketing Website",
        },
        {
            id: 2,
            href: "#",
            imgSrc: "/projects/p2.png",
            icon: { name: "cog", color: "white", background: "black" },
            title: "Webify",
            description: "Web Development Agency Website",
        },
        {
            id: 3,
            href: "#",
            imgSrc: "/projects/p3.png",
            icon: { name: "check-shield", color: "black", background: "#ffd900" },
            title: "CIPHER",
            description: "Cyber Security Website",
        },
    ]);

    return projects;
};

export default useProjects;