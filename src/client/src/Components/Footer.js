import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
            <footer class="footer-1 bg-gray-100 py-8 sm:py-12 ">
                <hr/>
                <div class="container mx-auto pl-40">
                    <div class="flex flex-column sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <Link to="/"  class="border-b border-solid text-lg border-transparent hover:border-purple-800 text-purple-800">Home</Link>
                            {/* <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
                                </li>
                            </ul> */}
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <Link to="/translate" class="border-b border-solid text-lg border-transparent hover:border-purple-800 text-purple-800">Translate</Link>
                            {/* <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
                                </li>
                            </ul> */}
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <Link to="/aboutus" style={{textDecoration:'none'}} class="border-b border-solid text-lg border-transparent hover:border-purple-800 text-purple-800">About Us</Link>
                            {/* <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
                                </li>
                            </ul> */}
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <Link to="/contact" class="border-b border-solid text-lg border-transparent hover:border-purple-800 text-purple-800">Contact</Link>
                            {/* <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                </li>
                            </ul> */}
                        </div>
                        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                            <div class="flex sm:justify-center xl:justify-start">
                                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t"> */}
                        {/* <div class="sm:w-full px-4 md:w-1/6">
                            <strong>Locate Us</strong>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Address</h6>
                            <address class="not-italic mb-4 text-sm">
                                99 Stock Street<br/>
                                Delhi, India
                            </address>
                        </div> */}
                        {/* <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Free Resources</h6>
                            <p class="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br/>
                                <em>All are MIT License</em></p>
                        </div> */}
                        {/* <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                            <button class="px-4 py-2 bg-purple-800 hover:bg-purple-600 rounded text-white" onClick={()=>document.body.scrollTop = 0}>Back to Top</button>
                        </div> */}
                    {/* </div> */}
                </div>
            </footer>
    )
}

export default Footer
