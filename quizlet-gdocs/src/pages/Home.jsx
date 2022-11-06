import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const clientId = "525844190311-0ufbalrpqp19s7r3gr4fub6alq2oounl.apps.googleusercontent.com"


const Home = () => {
    const [googleProfile, setGoogleProfile] = useState([])
    // const [googleSignedIn, setGoogleSignedIn] = useState(false)
    // const [quizletSignedIn, setQuizletSignedIn] = useState(true)
    // const [docLink, setDocLink] = useState("")
    const [userName, setUserName] = useState("")


    const signedInHeader = <p>Paste your Quizlet set URL and click convert to create a Google Doc</p>
    const signedOutHeader = <p>Sign in to your Google Account to convert a Quizlet set into a Google Doc!</p>


    const onSuccess = (res) => {
        setGoogleProfile(res.profileObj)
        setUserName(res.profileObj.name)
        console.log("Sign in Success", res)
    }

    const onFailure = (res) => {
        console.log("Sign in Failure", res)
    }

    const logOut = () => {
        setGoogleProfile(null)
        setUserName("")
        console.log("Logging out")
    }

    const onConvert = () => {
        console.log("converting link")
        // Call endpoint to check if signed in to quizlet
        // If signed in, call endpoint to convert to google doc
            // Pass in auth token as cookie
    }


    const convertQuizletForm = 
        <div>
            <Stack direction="horizontal" gap={3}>
                <Form.Control 
                    size="lg" 
                    placeholder='Enter your Quizlet URL'
                />
                <Button 
                    variant="primary" 
                    size="lg"
                    onClick={onConvert}
                >
                    Convert
                </Button>{' '}
            </Stack>
            <GoogleLogout 
                clientId={clientId} 
                buttonText="Log out" 
                onLogoutSuccess={logOut} 
            />
        </div>


    return (
        <div>
            <Navigation/>
            <Container className="text-center my-5">
                <Row className="mb-3">
                    {
                        userName === "" ?
                            <h1 className='mb-4'>Welcome to QuizletDocs &#128516;</h1>
                            : <h1 className='mb-4'>Welcome to QuizletDocs, {userName.split(" ")[0]} &#128516;</h1>
                    }
                    {
                        googleProfile ?
                            signedInHeader
                            : signedOutHeader
                    }
                </Row>
                <Row className='justify-content-center'>
                    <Form className="w-50">
                        {
                            googleProfile ?
                                convertQuizletForm
                                : <GoogleLogin 
                                    style={{width: "50px"}}
                                    clientId={clientId}
                                    buttonText="Sign in with Google"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                        }
                    </Form>
                </Row>
            </Container>
        </div>
  )
}

export default Home