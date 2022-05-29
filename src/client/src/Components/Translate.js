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

    const handleClick = () => {
        try {
            setIsListening(false)
            setLoading(true)
            // let res = axios.get(`/signLanguage/?statement${note}`);
            let imagesArr;
            // imagesArr = res.data.imageNames;
            imagesArr = []
            let arr = []
            if (imagesArr.length == 1) {
                arr.push(imagesArr[0])
            } else {
                for (let i = 0; i < imagesArr.length; i++) {
                    let ext = imagesArr[i].split('.')[1]
                    if (ext == 'gif') {
                        arr.push(imagesArr[i])
                    } else {
                        let img = makeGif(imagesArr[i])
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

    
    const makeGif = (images) => {
        const options = {
            images: images,
            gifWidth: 500,
            gifHeight: 300,
            numWorkers: 5,
            frameDuration: 0.01,
            sampleInterval: 10,
        };
        createGIF(options, obj => {
            if (!obj.error) {
                return obj.image;
            }
        });
    }
    console.log(require('../assets/images/A.jpg').default)

    return (
        <div className='mt-20 p-12 mb-20'>
            <img src={require('../assets/images/A.jpg').default} alt='aa'></img>
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
                <div className='mt-4 p-8 border rounded-xl'>

                </div>
                <div>

                </div>
                {/* <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div> */}
                {
                    vidArray.map(vid => (
                        <img src={vid} />
                    ))
                }
            </div>
        </div>
    )
}

export default Translate