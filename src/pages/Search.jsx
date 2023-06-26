import React from 'react'
import { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsHouseDoor } from 'react-icons/bs'
import Candidates from '../components/Candidates'


// data
const dataList = [
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

const Search = () => {


    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);


    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(dataList);
        else {
            const filteredData = dataList.filter(item => {
                return (item.toLowerCase().indexOf(lowercasedValue.toLowerCase()) !== -1
                );
            });
            setData(filteredData);
        }
    }

    return (
        <>

            <div className='searchDiv'>

                <form action="">
                    <div className="firstDiv">

                        <div className='flex gap-2 items-center'>
                            <AiOutlineSearch className='text-[25px] icon' />
                            <input onChange={e => handleChange(e.target.value)} type="text" className='bg-transparent text-black focus:outline-none w-[100%]' placeholder='Search by roles..' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon' />
                        </div>

                        <div className='flex gap-2 items-center'>
                            <BsHouseDoor className='text-[25px] icon' />
                            <input type="text" className='bg-transparent text-black focus:outline-none w-[100%]' placeholder='Search by company..' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon' />
                        </div>

                        <div className='flex gap-2 items-center'>
                            <CiLocationOn className='text-[25px] icon' />
                            <input onChange={handleChange} type="text" className='bg-transparent text-black focus:outline-none w-[100%]' placeholder='Search by location..' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon' />
                        </div>

                        <button onClick={(e) => handleChange} className='bg-darkPurple h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-lightPurple hover:text-darkPurple'>
                            Search
                        </button>

                    </div>
                </form>

            </div>
            <div>
                <Candidates />
            </div>

            {/* {filterByRoles && (
                data.map((d,index) => {
                    return (
                        <div className='candidateDiv'>
                            <div className="candidate__container">
                                <div key={index} className="singleCandidate  group group/item shadow-bg[#f1f4f8]-400/700">
                                    <span className='flex items-center justify-between gap-4'>
                                        <h1 className='text-[16px] font-semibold text-black group-hover:text-white'>{d[id].name}</h1>
                                        <span className='flex items-center gap-1 text-[#ccc]'>
                                            <BiTimeFive />{d[id].yoe}years
                                        </span>
                                    </span>
                                    <h6 className='text-[#ccc]'>{d[id].location}</h6>

                                    <p className='text-[15px] text-[#959595] pt-[10px] border-t-[2px] mt-[10px] group-hover:text-white'><span className='text-[#ccc]'>Role : </span> {d[id].role}</p>
                                    <p className='text-[15px] text-[#959595] pt-[10px] group-hover:text-white'><span className='text-[#ccc]'>Company : </span> {d[id].company}</p>

                                    <button className='p-[10px] mt-[10px] w-full bg-darkPurple hover:bg-lightPurple rounded-[15px] outline outline-1 outline-white text-white font-semibold hover:text-darkPurple text-center'>
                                        Recruit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )} */}
        </>

    )
}

export default Search
