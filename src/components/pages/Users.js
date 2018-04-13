import React , { Component } from 'react';
import './Users.css';
import TableUsers from "../organisms/TableUsers";
import SelectPeriod from "../atoms/SelectPeriod";
import JamesSmith from '../../assets/img/JamesSmith.png';
import NinaJones from '../../assets/img/NinaJones.png';
import AlexSmith from '../../assets/img/AlexClooney.png';
import AnnClooney from '../../assets/img/AlexandraSpears.png';
import Patrick from '../../assets/img/PatricSmith.png';
import NickyHunt from '../../assets/img/NickyHunt.png';
import JoneDoe from '../../assets/img/JaneDoe.png';

const UsersList = [
    {
        id: 1,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: true
    },
    {
        id: 2,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: true
    },
    {
        id: 3,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: true
    },
    {
        id: 4,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 5,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 6,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 7,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 8,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 9,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 10,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 11,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 12,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 13,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 14,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 15,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 16,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 17,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 18,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 19,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 20,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 21,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 22,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 23,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 24,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 25,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 26,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 27,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 28,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 29,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 30,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 31,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 32,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 33,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 35,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 36,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 37,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 38,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 38,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 40,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 41,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 42,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 43,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 44,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 45,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 46,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 47,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 48,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 49,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 50,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 51,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 52,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 53,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 54,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 55,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 56,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 57,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 58,
        img: JamesSmith,
        name: "John Doe",
        post: "CEO",
        status: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 59,
        img: NinaJones,
        name: 'Nina Jones',
        post: "UX Designer",
        status: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 60,
        img: AlexSmith,
        name: "Alex Smith",
        post: "Web Designer",
        status: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 61,
        img: AnnClooney,
        name: "Ann Clooney",
        post: "Account Manager",
        status: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 62,
        img: Patrick,
        name: "Patrick Smith",
        post: "Project Manager",
        status: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 63,
        img: NickyHunt,
        name: "Nicky Hunt",
        post: "Product Designer",
        status: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        active: false
    },
    {
        id: 64,
        img: JoneDoe,
        name: "Jane Doe",
        post: "Graphic Designer",
        status: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        active: false
    }
];

const usersSort = ["Active first", "NoActive first"];

class Users extends Component {

    render() {
        return(
            <section className="Users-Section">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center UsersHeader">
                        <h2 className="Users-Title">Users<span> ({UsersList.length})</span></h2>
                        <SelectPeriod data={usersSort}/>
                    </div>
                    <TableUsers data={ UsersList }/>
                </div>
            </section>
        )
    }
}

export default Users;