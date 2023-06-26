import React from 'react'
import { BiTimeFive } from 'react-icons/bi'


// data
const data = [
    {
        id: 1,
        name: "Abhay Dey",
        yoe: 1,
        location: "Bangalore",
        role: "Web Developer",
        company: "Oracle"
    },
    {
        id: 2,
        name: "Akshita Deol",
        yoe: 2,
        location: "Bangalore",
        role: "Software Developer",
        company: "PhonePe"
    },
    {
        id: 3,
        name: "Daniel Jewels",
        yoe: 5,
        location: "Delhi",
        role: "Salesforce Developer",
        company: "Niyo Solutions"
    },
    {
        id: 4,
        name: "Kevin Desouza",
        yoe: 1,
        location: "Hyderabad",
        role: "Web Developer",
        company: "Pyson Netwerks"
    },
    {
        id: 5,
        name: "Sonali Mehta",
        yoe: 1,
        location: "Kolkata",
        role: "Android Developer",
        company: "Infosys"
    },
    {
        id: 6,
        name: "Udita Sharma",
        yoe: 3,
        location: "Bangalore",
        role: "Android Developer",
        company: "TCS"
    },
    {
        id: 7,
        name: "Varun Kapoor",
        yoe: 4,
        location: "Bangalore",
        role: "Software Developer",
        company: "Google"
    },
    {
        id: 8,
        name: "Jayanta Paul",
        yoe: 2,
        location: "Delhi",
        role: "Web Developer",
        company: "Byson Solutions"
    },
    {
        id: 9,
        name: "Gopal Gupta",
        yoe: 0 - 1,
        location: "Bangalore",
        role: "Salesforce Developer",
        company: "Genosis Pvt. Ltd."
    },
    {
        id: 10,
        name: "Anant Vihar",
        yoe: 3,
        location: "Bangalore",
        role: "Web Developer",
        company: "PhonePe"
    },
]


const Candidates = () => {
    return (
        <div className='candidateDiv'>
            <div className="candidate__container">

                {data.map(({ id, name, yoe, location, role, company }) => {
                    return (

                        <div key={id} className="singleCandidate  group group/item shadow-bg[#f1f4f8]-400/700  hover:scale-105 duration-200">
                            <span className='flex items-center justify-between gap-4'>
                                <h1 className='text-[16px] font-semibold text-black group-hover:text-white'>{name}</h1>
                                <span className='flex items-center gap-1 text-[#ccc]'>
                                    <BiTimeFive />{yoe}years
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>{location}</h6>

                            <p className='text-[15px] text-[#959595] pt-[10px] border-t-[2px] mt-[10px] group-hover:text-white'><span className='text-[#ccc]'>Role : </span> {role}</p>
                            <p className='text-[15px] text-[#959595] pt-[10px] group-hover:text-white'><span className='text-[#ccc]'>Company : </span> {company}</p>

                            <button className='p-[10px] mt-[10px] w-full bg-darkPurple hover:bg-lightPurple rounded-[15px] outline outline-1 outline-white text-white font-semibold hover:text-darkPurple text-center'>
                                Recruit
                            </button>

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Candidates;
