// import React from 'react';
// import Board from 'react-trello';
//
// import './WorkFlowList.css';
//
// const data = {
//     lanes: [
//         {
//             id: 'lane1',
//             header: 'To Do',
//             label: '',
//             cards: [
//                 {id: 'Task1', title: 'New website for JCD.pl', description: '', label: '5 days left'},
//                 {id: 'Task2', title: 'Free PSD Template vol. 3', description: '', label: '5 days left'},
//                 {id: 'Task3', title: 'New logo for Google', description: '', label: '5 days left'},
//                 {id: 'Task4', title: 'New website for Windu.org', description: '', label: '5 days left'},
//                 {id: 'Task5', title: 'Free PSD Template vol. 2', description: '', label: '5 days left'}
//             ]
//         },
//
//
//         {
//             id: 'lane2',
//             header: 'In Progress',
//             label: '',
//             cards: [
//                 {id: 'Task6', title: 'Iconset Vol. 3', description: '', label: '5 days left'},
//                 {id: 'Task7', title: 'New logo for Apple', description: '', label: '1 days left'},
//                 {id: 'Task8', title: 'Daily UI Kit', description: '', label: '5 days left'},
//                 {id: 'Task9', title: 'Business Cards', description: '', label: '2 days delays'}
//             ]
//         },
//         {
//             id: 'lane3',
//             header: 'Completed',
//             label: '()',
//             cards: [
//                 {id: 'Task10', title: 'Free PSD Template vol. 1', description: '', label: 'Completed'},
//                 {id: 'Task11', title: 'Iconset Vol. 1', description: '', label: 'Completed'},
//                 {id: 'Task12', title: 'New website for Symu.co', description: '', label: 'Completed'},
//                 {id: 'Task13', title: 'Iconset vol. 2', description: '', label: 'Completed'},
//             ]
//         }
//     ]
// };
//
//
//
// class WorkFlowList extends React.Component {
//     render() {
//         return(
//             <section
//                 className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "WorkflowPage" : "WorkflowPage WorkflowPageActive"}>
//                 <Board data={data} draggable style={
//                     {
//                         background: 'transparent',
//                         display: 'flex',
//                         height: 'max-content',
//                         width: '100%',
//                         justifyContent: 'space-around'
//                     }
//                 }
//                        customCardLayout
//                        customLaneHeader={<CustomLaneHeader/>}
//                 >
//                     <CustomCard/>
//                 </Board>
//
//             </section>
//         );
//     }
// }
//
// export default WorkFlowList;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React, { Component } from 'react';
// // import './WorkFlowList.css';
// // import ArrowNext from '../../assets/img/arrow-next.png';
// // import Options from '../../assets/img/Options.png';
// //
// //
// // const ItemListToDo = [
// //     {
// //         id: 1,
// //         img_wrap: 'N',
// //         title: 'New website for JCD.pl',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 2,
// //         img_wrap: 'F',
// //         title: 'Free PSD Template vol. 3',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 3,
// //         img_wrap: 'N',
// //         title: 'New logo for Google',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 4,
// //         img_wrap: 'N',
// //         title: 'New website for Windu.org',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 5,
// //         img_wrap: 'F',
// //         title: 'Free PSD Template vol. 2',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 6,
// //         img_wrap: 'I',
// //         title: 'Iconset Vol. 3',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     }
// // ];
// //
// // const ItemListInProgress = [
// //     {
// //         id: 1,
// //         img_wrap: 'N',
// //         title: 'New logo for Apple',
// //         day_title: '1 day left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 2,
// //         img_wrap: 'D',
// //         title: 'Daily UI Kit',
// //         day_title: '5 days left',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-to_do'
// //     },
// //     {
// //         id: 3,
// //         img_wrap: 'B',
// //         title: 'Business Cards',
// //         day_title: '2 days delays',
// //         font_awesome: 'fa fa-clock-o',
// //         font: 'days-left days-left-error'
// //     }
// // ];
// //
// // const ItemListCompleted = [
// //     {
// //         id: 1,
// //         img_wrap: 'F',
// //         title: 'Free PSD Template vol. 1',
// //         day_title: 'Completed!',
// //         font_awesome: 'fa fa-check-circle',
// //         font: 'days-left days-left-completed'
// //     },
// //     {
// //         id: 2,
// //         img_wrap: 'I',
// //         title: 'Iconset vol. 1',
// //         day_title: 'Completed!',
// //         font_awesome: 'fa fa-check-circle',
// //         font: 'days-left days-left-completed'
// //     },
// //     {
// //         id: 3,
// //         img_wrap: 'N',
// //         title: 'New website for Symu.co',
// //         day_title: 'Completed!',
// //         font_awesome: 'fa fa-check-circle',
// //         font: 'days-left days-left-completed'
// //     },
// //     {
// //         id: 4,
// //         img_wrap: 'I',
// //         title: 'Iconset vol. 2',
// //         day_title: 'Completed!',
// //         font_awesome: 'fa fa-check-circle',
// //         font: 'days-left days-left-completed'
// //     }
// // ];
// //
// // class WorkFlowList extends Component{
// //     render(){
// //         return(
// //             <ul className="row">
// //
// //                 <li className="col-md-6 col-lg-4">
// //                     <div className="d-flex justify-content-between">
// //                         <h4 className="Workflow-Title">to do <span>(6)</span></h4>
// //                         <img src={ ArrowNext } alt="" className="arrow-next"/>
// //                     </div>
// //                     <ul className="TaskList">
// //                         {
// //                             ItemListToDo.map(item =>{
// //                                 return(
// //                                     <li className="TaskList-Item" key={item.id}>
// //                                         <div className="d-flex justify-content-between align-items-center flex-wrap">
// //                                             <div className="TaskList-Wrap d-flex align-items-center">
// //                                                 <div className="TaskWrap">
// //                                                     <span>{item.img_wrap}</span>
// //                                                 </div>
// //                                                 <ul>
// //                                                     <li className="Task-Title">{item.title}</li>
// //                                                     <li className={item.font}>
// //                                                         <i className={item.font_awesome} aria-hidden="true"></i>
// //                                                         {item.day_title}
// //                                                     </li>
// //                                                 </ul>
// //                                             </div>
// //                                             <img src={ Options} className="Options-img"  alt=""/>
// //                                         </div>
// //                                     </li>
// //                                 );
// //                             })
// //                         }
// //                     </ul>
// //                 </li>
// //
// //                 <li className="col-md-6 col-lg-4">
// //                     <div className="d-flex justify-content-between">
// //                         <h4 className="Workflow-Title">in progress <span>(3)</span></h4>
// //                         <img src={ ArrowNext } alt="" className="arrow-next"/>
// //                     </div>
// //                     <ul className="TaskList">
// //                         {
// //                             ItemListInProgress.map(item =>{
// //                                 return(
// //                                     <li className="TaskList-Item" key={item.id}>
// //                                         <div className="d-flex justify-content-between align-items-center flex-wrap">
// //                                             <div className="TaskList-Wrap d-flex align-items-center">
// //                                                 <div className="TaskWrap">
// //                                                     <span>{item.img_wrap}</span>
// //                                                 </div>
// //                                                 <ul>
// //                                                     <li className="Task-Title">{item.title}</li>
// //                                                     <li className={item.font}>
// //                                                         <i className={item.font_awesome} aria-hidden="true"></i>
// //                                                         {item.day_title}
// //                                                     </li>
// //                                                 </ul>
// //                                             </div>
// //                                             <img src={ Options} className="Options-img"  alt=""/>
// //                                         </div>
// //                                     </li>
// //                                 );
// //                             })
// //                         }
// //                     </ul>
// //                 </li>
// //
// //                 <li className="col-md-6 col-lg-4">
// //                     <div className="d-flex justify-content-between">
// //                         <h4 className="Workflow-Title">Completed  <span>(4)</span></h4>
// //                         <img src={ ArrowNext } alt="" className="arrow-next"/>
// //                     </div>
// //                     <ul className="TaskList">
// //                         {
// //                             ItemListCompleted.map(item =>{
// //                                 return(
// //                                     <li className="TaskList-Item" key={item.id}>
// //                                         <div className="d-flex justify-content-between align-items-center flex-wrap">
// //                                             <div className="TaskList-Wrap d-flex align-items-center">
// //                                                 <div className="TaskWrap">
// //                                                     <span>{item.img_wrap}</span>
// //                                                 </div>
// //                                                 <ul>
// //                                                     <li className="Task-Title">{item.title}</li>
// //                                                     <li className={item.font}>
// //                                                         <i className={item.font_awesome} aria-hidden="true"></i>
// //                                                         {item.day_title}
// //                                                     </li>
// //                                                 </ul>
// //                                             </div>
// //                                             <img src={ Options} className="Options-img"  alt=""/>
// //                                         </div>
// //                                     </li>
// //                                 );
// //                             })
// //                         }
// //                     </ul>
// //                 </li>
// //             </ul>
// //         )
// //     }
// // }
// //
// // export default  WorkFlowList;
