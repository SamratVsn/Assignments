import React from 'react'
import Perplexity from "../assets/Perplexity.jpeg"
import ReacT from '../assets/react.svg'

export default function Home() {
    return (
        <div className="bg-gray-900 text-white h-[140vh] flex flex-col items-center py-12 px-4 font-sans">
            <div className="max-w-3xl w-full">
                <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                    EduSphere presents: 6-Weeks free Virtual Web Dev Bootcamp
                </h1>

                <p className="text-xl mb-12 text-center">
                    A mentorship + collaboration program to level up your skills and build real-world projects with a team.
                </p>

                <div className="border-t border-gray-700 my-8"></div>

                <h2 className="text-3xl font-bold mb-6">What's this about?</h2>
                <p className="text-lg mb-8">
                    Whether you're just starting out or looking to sharpen your web development skills, this program is for you.
                    You'll get to learn modern tools and work on a real-world project – all while being guided by experienced peers
                    from the EduSphere team.
                </p>

                <div className="border-t border-gray-700 my-8"></div>

                <h2 className="text-3xl font-bold mb-6">Who can join?</h2>
                <p className="text-lg mb-4">
                    You just need a basic understanding of HTML, CSS, and JavaScript. Don't worry – you don't have to be a pro.
                    We've got you covered!
                </p>
                <p className="text-lg mb-8">
                    If you're eager to learn, build, and collaborate in a team setting.
                </p>

                <div className="border-t border-gray-700 my-8"></div>

                <div className="flex justify-center mt-12">
                    <a
                        href="https://www.edusphere.pro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    )
}
