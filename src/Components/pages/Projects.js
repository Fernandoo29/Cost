import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from './Projects.module.css';

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

function Project(){
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const location = useLocation();

    let message = '';
    if(location.state){
        console.log(location.state.message);
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message msg={message} type="success" />}

            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            id={project.id} 
                            name={project.name} 
                            budget={project.budget} 
                            category={project.category.name} 
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 &&(
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Project