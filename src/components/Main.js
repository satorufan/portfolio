import React from 'react';
import { useState } from 'react';
import { ownProjects, teamProjects } from '../data/project';

const Main = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalType, setModalType] = useState('');

    const openModal = (project, type) => {
        setSelectedProject(project);
        console.log(project.images);
        console.log(Object.keys(project));
        setModalType(type);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalType('');
    };

    const handleBackdropClick = (event) => {
        // 클릭된 요소가 모달 콘텐츠가 아닐 때만 모달을 닫습니다
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };

    const handleLoadCode = async (project, path) => {
        if (project) {
            try {
                // 비동기적으로 파일을 가져옵니다.
                const response = await fetch(project.codes[path]);
                // 응답에서 텍스트를 읽어옵니다.
                const data = await response.text();
                // 데이터 반환
                console.log(data)
                return data;
            } catch (error) {
                console.error('Error fetching file:', error);
                return null; // 오류 발생 시 null 반환
            }
        }
    };

    return (
        <div className='main'>
            <section className='intro'>
                <h1>MinSang Kim</h1>
                <p>반갑습니다.</p>
            </section>

            <section className='skills'>
                <h1>SKILLS</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className='title'>Language</td>
                            <td>
                                <ul>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Back-End</td>
                            <td>
                                <ul>
                                    <li>Spring / Java</li>
                                    <li>Node.js (Express) / JavaScript</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Front-End</td>
                            <td>
                                <ul>
                                    <li>React.js / JavaScript</li>
                                    <li>EJS / JavaScript</li>
                                    <li>JSP / Java</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>DataBase</td>
                            <td>
                                <ul>
                                    <li>MySQL</li>
                                    <li>Firebase</li>
                                    <li>MongoDB</li>
                                    <li>Redis</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Tools & Communication</td>
                            <td>
                                <ul>
                                    <li>VS Code / Eclipse</li>
                                    <li>Git</li>
                                    <li>Slack / Discord</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* <section className='education'>
                <h1>EDUCATION</h1>
                <div className='education-content'>
                    <p className='college'>대구대학교 <span style={{ color: '#c0c0c0' }}>(2019.03~2023.02)</span></p>
                    <div className='edu-details'>
                        <p className='major'>전자공학 - 학사 (4.19 / 4.5)</p>
                    </div>
                </div>
            </section> */}

            <section className='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-content'>
                    <section className="projects-section">
                        <h2>SOLO</h2>
                        <div className="projects-list">
                            {ownProjects.map((project, index) => (
                                <p key={index} onClick={() => openModal(project, 'OWN')}>
                                    {project.name}
                                </p>
                            ))}
                        </div>
                    </section>

                    <section className="projects-section">
                        <h2>TEAM</h2>
                        <div className="projects-list">
                            {teamProjects.map((project, index) => (
                                <p key={index} onClick={() => openModal(project, 'TEAM')}>
                                    {project.name}
                                </p>
                            ))}
                        </div>
                    </section>
                    {/* <div className='project'>
                        <h2>OWN</h2>
                        <p>📓 My Diary</p>
                    </div>
                    <div className='project'>
                        <h2>TEAM</h2>
                        <p>🪞 안면인식 기술을 이용한 스마트 미러</p>
                        <p>🧳 여행 메이트 구인 웹 앱</p>
                        <p>🍺 동네 술 친구 사귀기 웹 앱 (~ing)</p>
                    </div> */}
                </div>
            </section>

            {selectedProject && (
                <div className="modal" onClick={handleBackdropClick}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.name}</h2>
                        <p><strong>기간:</strong> {selectedProject.period}</p>
                        <p><strong>인원:</strong> {selectedProject.teamSize}</p>
                        <p><strong>사용한 기술:</strong> {selectedProject.technologies}</p>
                        <p><strong>어려웠던 점:</strong> {selectedProject.challenges}</p>
                        <p><strong>결과물:</strong> {selectedProject.results}</p>
                        <div className='images'>
                            {Object.keys(selectedProject).includes("images") && Object.keys(selectedProject.images).map((image) => (
                                <div className='container' key={image}>
                                    <p>{image}</p>
                                    <img src={selectedProject.images[image]} 
                                    alt={image}
                                    style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            ))}
                        </div>
                        <div className='codes'>
                            {Object.keys(selectedProject).includes("codes") && Object.keys(selectedProject.codes).map((code) => (
                                <div className='container' key={code}>
                                    <p>{handleLoadCode(selectedProject, '../data/SmartMirror/recognizer.txt')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <section className='etc'>
                <h1>ETC</h1>
            </section>
        </div>
    );
}

export default Main;
