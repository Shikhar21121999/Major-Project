import React, { useState, useEffect } from 'react'

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Translate() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

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

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    return (
        <div className='mt-20 p-12 mb-20'>
            <div className="container w-100">
                <div className="box flex justify-center px-auto">
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
                    {note}
                </div>
                <div className='mt-4 p-8 border rounded-xl'>
                    <img className='animate-spin mx-auto' src="https://img.icons8.com/ios-filled/50/000000/loading.png" />
                </div>
                <div>

                </div>
                {/* <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div> */}
            </div>
        </div>
    )
}

export default Translate
