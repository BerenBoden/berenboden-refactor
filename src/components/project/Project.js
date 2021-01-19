import React, { Component } from 'react';
import {connect} from 'react-redux';
import Layout from '../layout/Layout';
import showcaseImg from '../../images/banner-bg.png';
import './Project.css';

export class Project extends Component {
    render() {
        console.log(this.props)
        const project = this.props.projects ? 
        (
            <div>
                <div className="mt-10">
                    <div><h1 className="text-5xl">{this.props.projects.title}</h1></div>
                    <div>{this.props.projects.body}</div>
                </div>
                
            </div>
        ) : 
        (
            <div>Loading project...</div>
        )

        return (
            <div>
                <img className="object-cover relative w-screen top-0 z-0 h-64" src={showcaseImg} alt=""/>
                <h1 className="absolute z-10 text-center mt-32 font-bold text-3xl text-white underline top-0 banner-head">{this.props.projects.title}</h1>
                <Layout>
                    <div>
                        {project}
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.project_id;
    return {
        projects: state.projects.find(project => project.key === id)
    }
}

export default connect(mapStateToProps)(Project)