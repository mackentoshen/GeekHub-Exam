import React from 'react';
import './HomeYourProjectsContent.css';
import FontAwesome from 'react-fontawesome';

class HomeYourProjectsContent extends React.Component {
    render() {
        return (
          <div className="ProjectMainWrap">
              {this.props.data.map((item, index) => {
                  return (
                      <div className="ProjectContent" key={index}>
                          <div className="ProjectInfoBlock">
                              <img src={item.photo}/>
                              <div className="ProjectTextWrap">
                                  <div className={"ProjectHeader"}>
                                      <p>{item.kindofwork}</p>
                                  </div>
                                  <p className="ProjectText">{item.company} * ${item.value}</p>
                              </div>
                              <button className="AllProjectsBtn ProjectsHomeBtn">
                                  <FontAwesome
                                      className='dropdown-dots'
                                      name='ellipsis-v'
                                  />
                              </button>
                          </div>
                      </div>
                  );
              })}
          </div>
        );
    }
}

export default HomeYourProjectsContent;