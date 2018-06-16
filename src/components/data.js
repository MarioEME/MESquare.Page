import React from 'react'


class Data {
    getProjects() {
        var projects = [
            {
                id: "PRJ005",
                name: "XrmToolBox Audit Explorer",
                description: <div>
                    A <a target="_blank" href="https://www.xrmtoolbox.com">XrmToolBox</a> plugin to explorer audit history using the name of any attribute, entity or user.
                </div>,
                sourceUrl: "https://github.com/MarioEME/MESquare.XrmToolBox.AuditExplorer",
                url: "https://www.xrmtoolbox.com/plugins/MESquare.XrmToolBox.AuditExplorer",
                downloadUrl: "",
                keywords: "Windows Forms, XrmToolBox",
            },
            {
                id: "PRJ004",
                name: "TicTacToe",
                description: <div>
                    JavaScript implementation of TicTacToe.<br/>
                    Modes:<br/>
                    <ul>
                        <li>Player vs Player</li>
                        <li>Player vs Computer</li>
                    </ul>
                    Board:<br/>
                    <ul>
                        <li>3x3</li>
                        <li>4x4</li>
                    </ul>
                </div>,
                sourceUrl: "https://github.com/MarioEME/MESquare.TicTacToe",
                url: "http://mario-encarnacao.com/projects/tictactoe/index.html",
                downloadUrl: "",
                keywords: "JavaScript",

            },
            {
                id: "PRJ003",
                name: "Paparazzi",
                description: "A windows app that watches everything that you do and record it with a screen capture with a specific recurrence.",
                sourceUrl: "https://github.com/MarioEME/MESquare.Paparazzi",
                url: "",
                downloadUrl: "",
                keywords: "Windows Forms",
            },
            {
                id: "PRJ002",
                name: "Memory Filler",
                description: "A simple windows app to populate memory using blocks of user-defined size",
                sourceUrl: "https://github.com/MarioEME/MemoryFiller",
                url: "",
                downloadUrl: "",
                keywords: "Windows Forms",
            },
            {
                id: "PRJ001",
                name: "YASFA",
                description: "YASFA - Yet Another Simple Feed Aggregator is a simple feed aggregator created for personal use. Uses only portuguese news feeds.",
                sourceUrl: "https://github.com/MarioEME/MESquare.YASFA",
                url: "http://mario-encarnacao.com/projects/news/index.html",
                downloadUrl: "",
                keywords: "JavaScript, PHP, MaterializeCss",
            }
            
        ];

        return projects;
    }
    getResume() {
        var resume = [
            {
                id:"4",
                date: "Nov 2013 - Now",
                company: {
                    name: "SLIM Business Solutions",
                    url: "http://slimbs.com",
                    location: "Braga, Portugal",
                },
                title: "Tecnical Consultant",
                description: "Responsible for design and implement aplications that meet the clients requirements, using the best fit technology for the job, or using what customer preferences. Maintain customer projects when needed.",
                keywords: ["Apache","Azure","C#","DevExpress","Entity Framework","Entity Framework","ERP Primavera","IIS","JavaScript","JavaScript","jQuery","JSON","MariaDB","Microsoft Dynamics CRM","MS SQL Server", "Outlook Addins", "PHP", "REST", "SharePoint 2010", "SharePoint 2013", "SharePoint Online", "SOAP", "Telerik KendoUI", "VB .Net", "WebAPI", "XAF", "XML"]
            },
            {
                id:"3",
                date: "Jan 2011 - Nov 2013",
                company: {
                    name: "Self-Employed",
                    url: "http://mario-encarnacao.com",
                    location: "Braga, Portugal",
                },
                title: "Software Developer",
                description: "Design and implement customer solutions",
                keywords: ["C/C++","Sockets","Multithread","DataBase engine","PHP","Linux", "Apache","JavaScript","Java","Android App Development","Boostrap","Machine Learning","HTML","REST","WebAPI"]
            },
            {
                id:"2",
                date: "Mar 2009 - Dec 2010",
                company: {
                    name: "PRIMAVERA BSS",
                    url: "https://pt.primaverabss.com/en/",
                    location: "Braga, Portugal",
                },
                title: "Technical Consultant",
                description: "Design and implement customer solutions",
                keywords: ["WebCentral", "ASPx Web Forms", "JavaScript", "HTML", "MS SQL Server", "Crystal Reports", "JavaScript","HTML","CSS","C#","VB .Net"]
            },
            {
                id:"1",
                date: "Mar 2007 - Mar 2009",
                company: {
                    name: "PRIMAVERA BSS",
                    url: "https://pt.primaverabss.com/en/",
                    location: "Braga, Portugal",
                },
                title: "Software Developer",
                description: "Responsible for design and implement modules for company intranet.",
                keywords: ["WebCentral", "ASPx Web Forms", "JavaScript", "HTML", "MS SQL Server", "Crystal Reports", "JavaScript","HTML","CSS","C#","VB .Net"]
            },
        ];

        return resume;
    }
}

export default Data;