import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { createGIF } from 'gifshot';
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Translate() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [loading, setLoading] = useState(false)
    const [vidArray, setVidArray] = useState([])
    // const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const urlHelper = (arr) => {
        let newArr = []
        arr.forEach(element => {
            let temp = []
            element.forEach(e => {
                console.log(e)
                let u = require(e)
                temp.push(u)
            })
            newArr.push(temp)
        })
        return newArr
    }

    const handleClick = async () => {
        try {
            setIsListening(false)
            setLoading(true)
            // let res = axios.get(`/signLanguage/?statement${note}`);
            let imagesArr;
            // imagesArr = res.data.imageNames;
            imagesArr = [['https://res.cloudinary.com/maharaja-surajmal-institute-of-technology-msit-new-delhi/image/upload/v1653832511/b_to2q7c.jpg', 'https://res.cloudinary.com/maharaja-surajmal-institute-of-technology-msit-new-delhi/image/upload/v1653832411/a_ar3bt4.jpg'], ['https://res.cloudinary.com/maharaja-surajmal-institute-of-technology-msit-new-delhi/image/upload/v1653832548/address_e78aot.gif'], ['https://res.cloudinary.com/maharaja-surajmal-institute-of-technology-msit-new-delhi/image/upload/v1653832411/a_ar3bt4.jpg', 'https://res.cloudinary.com/maharaja-surajmal-institute-of-technology-msit-new-delhi/image/upload/v1653832511/b_to2q7c.jpg']]
            // imagesArr = urlHelper(imagesArr)
            let arr = []
            if (imagesArr.length == 1) {
                arr.push(imagesArr[0])
            } else {
                for (let i = 0; i < imagesArr.length; i++) {
                    if (imagesArr[i].length == 1) {
                        arr.push(imagesArr[i][0])
                    } else {
                        let img = await new Promise((res, rej) => {
                            let r = makeGif(imagesArr[i])
                            console.log(r);
                            res(r)
                        })
                        console.log(img)
                        arr.push(img)
                    }
                }
            }
            setVidArray([...arr])
        } catch (err) {
            console.log(err.message);
        } finally {
            console.log(vidArray)
            setLoading(false)
        }
    }


    const makeGif = async (images) => {
        const options = {
            images: images,
            gifWidth: 500,
            gifHeight: 300,
            numWorkers: 5,
            frameDuration: 2,
            sampleInterval: 10,
        };
        return new Promise((res, rej) => {
            createGIF(options, obj => {
                if (!obj.error) {
                    console.log(obj)
                    res(obj.image)
                }
            })
        })
    }

    return (
        <div className='mt-20 p-12 mb-20'>
            {/* <img src={require('../assets/images/hello.gif').default} alt='aa'></img> */}
            <div className="container w-100">
                <div className="box flex justify-center">
                    <button className='bg-purple-800 py-2 px-8 rounded-xl text-white font-bold mr-4' onClick={() => setIsListening(prevState => !prevState)}>
                        {
                            isListening ? "Stop Recording" : "Start Recording"
                        }

                    </button>
                    {!isListening ? <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-recording-film-making-soft-fill-soft-fill-juicy-fish.png" /> : <img className='animate-pulse' src="https://img.icons8.com/doodle/60/000000/bandicam.png" />}
                    {/* <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button> */}
                </div>
                <div className='mt-4 p-8 border rounded-xl' >
                    {
                        note ? <p className='text-center text-xl font-bold'>{note}</p> : <p className='text-center text-xl font-bold text-gray-600'>Start Recording to translate...</p>
                    }
                </div>
                <div className='w-full flex justify-center'>
                    <button className={classnames('mt-4 mx-auto  border-2 text-gray-500 py-2 px-8 rounded-xl text-white font-bold w-40', { 'text-purple-800 border-purple-800 cursor-deafult': note && note.length > 0 && !loading }, { 'cursor-not-allowed': !note || note.length == 0 }, { 'cursor-wait': loading })} disabled={!note || note.length == 0 || loading} onClick={handleClick}>{
                        loading ? <img className='animate-spin mx-auto' src="https://img.icons8.com/ios-filled/28/000000/loading.png" /> : "Translate"
                    }
                    </button>
                </div>
                <div className=''>

                </div>
                <div className='mt-4 p-8 border rounded-xl flex flex-wrap '>
                    {
                        vidArray.map(vid => (
                            <img src={vid} className="h-60 w-100 m-4" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Translate