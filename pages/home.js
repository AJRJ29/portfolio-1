import Navbar from '../components/navbar'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Home() {


    return (
        <div className="home">
            <Navbar />
            <div className="homeSection">
                <h1>Nick Hvattum</h1>
                <hr/>
                <h3>I am a Software Engineer motivated by utilizing my background in QA to achieve practical, precise solutions to technical problems. I enjoy using my unique background along with my technical skills to create software that will impact the life of the end user.
                </h3>
            </div>
            <div className="homeSection techSection">
                <h1>Technologies</h1>
                <hr/>
                <div className="technologies">
                    <Card style={{ width: '80%' }}>
                        <Card.Body>
                            <Card.Text className="logoList">
                                <img className="logo" src="/html-5.png" alt="html-5 logo"></img>
                                <img className="logo" src="/javascript.png" alt="javascript logo"></img>
                                <img className="logo" src="/css.png" alt="CSS logo"></img>
                                <img className="logo" src="/react.png" alt="react logo"></img>
                                <img className="logo" src="/python.png" alt="python logo"></img>
                                <img className="logo" src="/typescript.png" alt="typescript logo"></img>
                                <img className="logo" src="/mongodb.png" alt="mongo db logo"></img>
                                <img className="logo" src="/postgresql.png" alt="postgresql logo"></img>
                                <img className="logo" src="/nodejs.png" alt="node js logo"></img>
                                <img className="logo" src="/heroku.png" alt="heroku logo"></img>
                                <img className="logo" src="/vscode.png" alt="visual studio code logo"></img>
                                <img className="logo" src="/github.png" alt="github logo"></img>

                            </Card.Text>
                            Icons by
                            <Card.Link href="https://icons8.com/"> icons8</Card.Link>
                        </Card.Body>
                    </Card>
                </div>    
            </div>
            <div className="homeSection">
                <h1>Recent Projects</h1>
                <hr/>
                <div className="recentProjects">
                    <Card style={{ width: '18rem' }}>
                        <Card.Title>Stay Inside</Card.Title>
                        <Card.Img variant="top" src="/MixItUp.png" alt="mix it up cocktail app screenshot" />
                        <Card.Body>
                            <Card.Text>
                            Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Body>Try it out 
                                    <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                </Card.Body>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Title>Mix It Up</Card.Title>
                        <Card.Img variant="top" src="/MixItUp.png" alt="mix it up cocktail app screenshot" />
                        <Card.Body>
                            <Card.Text>
                            Mix It Up is a cocktail app that was created with HTML, CSS, JavaScript, Express, and sequelize before being deployed to Heroku. This web app allows users to search for and store cocktail recipes to their favorites list and create virtual pantries containing ingredients that they currently have.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Body>Try it out 
                                    <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                </Card.Body>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Title>Social Distancing</Card.Title>
                        <Card.Img variant="top" src="/SocialDistancing.png" alt="social distancing game screenshot" />
                        <Card.Body>
                            <Card.Text>
                            Social Distancing is a dungeon crawler game created with HTML, CSS, and JavaScript.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Body>Try it out 
                                    <Card.Link href="https://mix-it-up-nh.herokuapp.com"> here</Card.Link>
                                </Card.Body>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>
            <div className="homeSection">
                <h1>Education</h1>
                <hr/>
            </div>   
        </div>
    )    
}