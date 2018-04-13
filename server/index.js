const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = [{
    username: 'Admin',
    pass: 'q1w2e3r4'
}];

let SalesLastYear = [["Websites",300],["Logo", 285],["Social Media",355],["Adwords", 119], ["E-Commerce", 285]];
let SalesLastMonth = [["Websites", 25],["Logo", 10],["Social Media", 28],["Adwords", 53],["E-Commerce", 40]];
let SalesLastWeek = [["Websites",7],["Logo", 5],["Social Media",9],["Adwords", 13],["E-Commerce", 11]];

let ReportSalesLastYear = [ 130, 170, 150, 100, 70, 86, 87, 95, 90, 160, 145, 50];
let ReportSalesLastMonth = [ 20.0, 28.0, 35.0, 49.0, 28, 55.0, 21.2, 40, 45, 49];
let ReportSalesLastWeek = [15.0, 7, 8.5, 16, 9.25, 4.5, 8.5, 5, 7, 11.6];



//Chart HomeSalesReport
const report = {
    year: [150, 216, 168, 105, 66, 105, 105, 153, 123, 195, 161, 51],
    month: [1, 4, 6, 5, 8, 2, 3, 7, 1, 5, 3, 1, 4, 6, 2, 5, 1, 10, 2, 5, 1, 9, 8, 5, 3, 13, 3, 6, 9, 12, 5],
    week: [1, 4, 6, 5, 8, 2, 3]
};

let ProjectsList = [
    {
        id: 1,
        userid: 'person1',
        company: 'Microsoft',
        kindofwork: 'New website',
        value: 2300,
        deadline: '15 May 2016',
        timetotheend: '10 days left',
        timespent: '40 hours',
        progress: 70,
        status: 'Development',
        assignedname: 'Dominic Lyton',
        assignedpost: 'Front end Dev',
        photo: '/img/dominic.png',
    },
    {
        id: 2,
        userid: 'person2',
        company: 'Google',
        kindofwork: 'Landing Page',
        value: 1250,
        deadline: '21 May 2016',
        timetotheend: '23 days left',
        timespent: '7 hours',
        progress: 15,
        status: 'Planning',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png',
    },
    {
        id: 3,
        userid: 'person3',
        company: 'Symu.co',
        kindofwork: 'New dashboard',
        value: 5100,
        deadline: '15 May 2016',
        timetotheend: '2 days left',
        timespent: '56 hours',
        progress: 90,
        status: 'Testing',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png',
    },
    {
        id: 4,
        userid: 'person2',
        company: 'JCD.pl',
        kindofwork: 'New Logo',
        value: 900,
        deadline: '15 June 2015',
        timetotheend: '30 days left',
        timespent: '10 hours',
        progress: 40,
        status: 'Design',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png',
    },
    {
        id: 5,
        userid: 'person3',
        company: 'Sumy.co',
        kindofwork: 'Landing Page',
        value: 1500,
        deadline: '8 August 2016',
        timetotheend: '2 month left',
        timespent: '0 hours',
        progress: 0,
        status: 'Quened',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 6,
        userid: 'person3',
        company: 'Facebook',
        kindofwork: 'Mobile App',
        value: 4300,
        deadline: '5th May 2016',
        timetotheend: 'Completed',
        timespent: '59 hours',
        progress: 100,
        status: 'Completed',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 7,
        userid: 'person3',
        company: 'Themeforest',
        kindofwork: 'Wordpress theme',
        value: 1300,
        deadline: '2 May 2016',
        timetotheend: 'Completed',
        timespent: '30 hours',
        progress: 100,
        status: 'Completed',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 8,
        userid: 'person4',
        company: 'Sumy.co',
        kindofwork: 'Landing Page',
        value: 1100,
        deadline: '30 August 2016',
        timetotheend: '1 month left',
        timespent: '2 days',
        progress: 50,
        status: 'Development',
        assignedname: 'Jolene Slater',
        assignedpost: 'Web Dev',
        photo: '/img/jolene.png'
    },
    {
        id: 9,
        userid: 'person1',
        company: 'Sumy.co',
        kindofwork: 'New Dashboard',
        value: 2000,
        deadline: '10 September 2016',
        timetotheend: '1 month left',
        timespent: '40 hours',
        progress: 90,
        status: 'Testing',
        assignedname: 'Dominic Lyton',
        assignedpost: 'Front End Dev',
        photo: '/img/dominic.png'
    },
    {
        id: 10,
        userid: 'person4',
        company: 'Sumy.co',
        kindofwork: 'Landing Page',
        value: 100,
        deadline: '20 March 2017',
        timetotheend: '20 days left',
        timespent: '18 days',
        progress: 45,
        status: 'Development',
        assignedname: 'Jolene Slater',
        assignedpost: 'Web Dev',
        photo: '/img/jolene.png'
    },
    {
        id: 11,
        userid: 'person4',
        company: 'Facebook',
        kindofwork: 'Mobile App',
        value: 2900,
        deadline: '01 April 2017',
        timetotheend: '13 days left',
        timespent: '24 days',
        progress: 73,
        status: 'Testing',
        assignedname: 'Jolene Slater',
        assignedpost: 'Web Dev',
        photo: '/img/jolene.png'
    },
    {
        id: 12,
        userid: 'person3',
        company: 'Facebook',
        kindofwork: 'Mobile App',
        value: 2100,
        deadline: '11 April 2017',
        timetotheend: '11 days left',
        timespent: '20 days',
        progress: 73,
        status: 'Testing',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 13,
        userid: 'person1',
        company: 'Themeforest',
        kindofwork: 'Wordpress theme',
        value: 2000,
        deadline: '02 May 2017',
        timetotheend: '14 days left',
        timespent: '10 days',
        progress: 52,
        status: 'Development',
        assignedname: 'Dominic Lynton',
        assignedpost: 'Front End Dev',
        photo: '/img/dominic.png'
    }, {
        id: 14,
        userid: 'person2',
        company: 'Google',
        kindofwork: 'Landing page',
        value: 1400,
        deadline: '01 April 2017',
        timetotheend: '3 days left',
        timespent: '20 days',
        progress: 80,
        status: 'Testing',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png'
    },
    {
        id: 15,
        userid: 'person4',
        company: 'Sumu.co',
        kindofwork: 'Mobile App',
        value: 1900,
        deadline: '05 September 2017',
        timetotheend: '20 days left',
        timespent: '20 days',
        progress: 47,
        status: 'Development',
        assignedname: 'Jolene Slater',
        assignedpost: 'Web Dev',
        photo: '/img/jolene.png'
    },
    {
        id: 16,
        userid: 'person2',
        company: 'JCD.pl',
        kindofwork: 'New Logo',
        value: 900,
        deadline: '15 April 2017',
        timetotheend: '10 days left',
        timespent: '3 days',
        progress: 39,
        status: 'Design',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png'
    },
    {
        id: 17,
        userid: 'person3',
        company: 'Symu.co',
        kindofwork: 'Wordpress theme',
        value: 2900,
        deadline: '31 Decemeber 2017',
        timetotheend: '0 days left',
        timespent: '24 days',
        progress: 100,
        status: 'Completed',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 18,
        userid: 'person1',
        company: 'Microsoft',
        kindofwork: 'New website',
        value: 3100,
        deadline: '22 April 2017',
        timetotheend: '23 days left',
        timespent: '1 month',
        progress: 61,
        status: 'Development',
        assignedname: 'Dominic Lynton',
        assignedpost: 'Front End Dev',
        photo: '/img/dominic.png'
    },
    {
        id: 19,
        userid: 'person2',
        company: 'Themeforest',
        kindofwork: 'Wordpress theme',
        value: 800,
        deadline: '30 June 2017',
        timetotheend: '13 days left',
        timespent: '2 days',
        progress: 33,
        status: 'Design',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png'
    },
    {
        id: 20,
        userid: 'person1',
        company: 'Facebook',
        kindofwork: 'Mobile App',
        value: 4100,
        deadline: '30 October 2017',
        timetotheend: '3 days left',
        timespent: '2 months',
        progress: 91,
        status: 'Testing',
        assignedname: 'Dominic Lynton',
        assignedpost: 'Front End Dev',
        photo: '/img/dominic.png'
    },
    {
        id: 21,
        userid: 'person3',
        company: 'Symu.co',
        kindofwork: 'Landing page',
        value: 1460,
        deadline: '01 July 2017',
        timetotheend: '23 days left',
        timespent: '4 days',
        progress: 13,
        status: 'Planning',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    },
    {
        id: 22,
        userid: 'person1',
        company: 'Facebook',
        kindofwork: 'Mobile App',
        value: 2400,
        deadline: '01 April 2017',
        timetotheend: '13 days left',
        timespent: '24 days',
        progress: 63,
        status: 'Development',
        assignedname: 'Dominic Lynton',
        assignedpost: 'Front End Dev',
        photo: '/img/dominic.png'
    },
    {
        id: 23,
        userid: 'person2',
        company: 'JCD.pl',
        kindofwork: 'New logo',
        value: 1440,
        deadline: '19 February 2017',
        timetotheend: '13 days left',
        timespent: '1 days',
        progress: 5,
        status: 'Planning',
        assignedname: 'Lyan Roach',
        assignedpost: 'UX/UI Designer',
        photo: '/img/lyan.png'
    },
    {
        id: 24,
        userid: 'person3',
        company: 'Symu.co',
        kindofwork: 'New Dashboard',
        value: 3940,
        deadline: '06 October 2017',
        timetotheend: '0 days left',
        timespent: '23 days',
        progress: 100,
        status: 'Completed',
        assignedname: 'Michelle Stewart',
        assignedpost: 'Account',
        photo: '/img/michelle.png'
    }
];

//RaportChart

let raportWeek = {
    dateData: [14, 22, 10, 2, 5, 12, 15],
    valuesData: ['', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', '']
};

let raportMonth = {
    dateData: [10, 20, 15, 13, 15, 9, 13, 23, 20, 7, 12, 21, 11, 11, 23, 8, 12, 11, 8, 20, 24, 11, 20, 11, 3, 12, 14, 21, 21, 12, 11],
    valuesData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
};

let raportYear = {
    dateData: [1220, 1250, 1440, 1375, 1695, 1725, 1550, 1000, 1111, 1385, 1495, 1625, 1580, 1510],
    valuesData: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
};

//raportHomeChart

let raportHomeWeek = [14, 22, 10, 2, 5, 12, 15];

//PieChart

let pieChartYear = [
    views = {
        data: [90, 10],
        num: 49500,
        percent: '90'
    },
    visitors = {
        data: [59, 31],
        num: 9000,
        percent: '59'
    },
    impressions = {
        data: [88, 12],
        num: 66500,
        percent: '88'
    }
];

let pieChartMonth = [
    views = {
        data: [66, 44],
        num: 5800,
        percent: '66'
    },
    visitors = {
        data: [55, 45],
        num: 2600,
        percent: '55'
    },
    impressions = {
        data: [32, 68],
        num: 7200,
        percent: '32'
    }
];

let pieChartWeek = [
    views = {
        data: [73, 27],
        num: 1300,
        percent: '73'
    },
    visitors = {
        data: [31, 69],
        num: 800,
        percent: '31'
    },
    impressions = {
        data: [62, 38],
        num: 3800,
        percent: '62'
    }
];


//Raport Table

let raportTable = [
    {
        Campaign: 'Lorem ipsum dolor sit amet tetur',
        Time: '6 days',
        Views: 358000,
        Visitors: 58200,
        CTR: '25%',
        CPC: '$3.02',
        CPV: '$2.51',
        CPM: '$28.35',
        Status: 'Active'
    },
    {
        Campaign: 'Sed do eiusmod tempor',
        Time: '7 hours',
        Views: 1200,
        Visitors: 800,
        CTR: '10%',
        CPC: '$8.45',
        CPV: '$6.13',
        CPM: '$45.22',
        Status: 'Disable'
    },
    {
        Campaign: 'Consectetur adipisicing elit sed',
        Time: '3 days',
        Views: 69000,
        Visitors: 7300,
        CTR: '19%',
        CPC: '$6.22',
        CPV: '$3.90',
        CPM: '$37.80',
        Status: 'Active'
    }
];



App.post('/api/user/register', (req, res) => {
    userExist.push({username: req.body.username, pass: req.body.password});
    console.log('Registration was successfully');
    console.log(userExist);
    return res.json()
});

App.post('/api/auth', (req, res) => {
    const user = req.body.login;
    const password = req.body.pass;

    let userCheck = userExist.filter((item) => {
        return (item.username === user && item.pass === password)
    });

    if (userCheck[0] !== undefined) {
        console.log('true');
        return res.json({
            check: true,
            username: userCheck[0].username
        })
    }
    else {
        console.log(' userCheck false');
        return res.json({check: false})
    }
});



//projects
App.get("/api/report/projects", (req, res) => {
    return res.json(
        ProjectsList
    );
});

//raport
App.get('/api/user/raport-week', (req, res) => {
    return res.json(
        raportWeek
    );
});

App.get('/api/user/raport-month', (req, res) => {
    return res.json(
        raportMonth
    );
});

App.get('/api/user/raport-year', (req, res) => {
    return res.json(
        raportYear
    );
});


//raportHomeWeek
App.get('/api/user/raport-week-home', (req, res) => {
   return res.json(raportHomeWeek)
});

//PieChart
App.get('/api/user/raport/pie/year', (req, res) => {
    return res.json(pieChartYear)
});

App.get('/api/user/raport/pie/month', (req, res) => {
    return res.json(pieChartMonth)
});

App.get('/api/user/raport/pie/week', (req, res) => {
    return res.json(pieChartWeek)
});

//RaportTable
App.get('/api/user/raport/raport-table', (req, res) => {
    return res.json(raportTable)
});

//Sales Report
App.get("/api/user/report/year", (req, res) => {
    return res.json(report.year)
});

App.get("/api/user/report/month", (req, res) => {
    return res.json(report.month)
});

App.get("/api/user/report/week", (req, res) => {
    return res.json(report.week)
});




App.get('/api/sales/last-year', (req, res) => {
    return res.json(
        SalesLastYear
    )
});

App.get('/api/sales/last-month', (req, res) => {
    return res.json(
        SalesLastMonth
    )
});

App.get('/api/sales/last-week', (req, res) => {
    return res.json(
        SalesLastWeek
    )
});

App.get('/api/report/last-year', (req, res) => {
    return res.json(
        ReportSalesLastYear
    )
});

App.get('/api/report/last-month', (req, res) => {
    return res.json(
        ReportSalesLastMonth
    )
});

App.get('/api/report/last-week', (req, res) => {
    return res.json(
        ReportSalesLastWeek
    )
});

App.listen(4000, () => {
    console.log("Server is ok");
});