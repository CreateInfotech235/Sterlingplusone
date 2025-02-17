import React, { useEffect, useRef } from "react";
import { FaRegStar, FaBox, FaPlay, FaRegClock, FaPause } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { GetHeroSection } from "../../Api/Webapi/GetHeroSection";
import { GetHeroOurServices } from "../../Api/Webapi/GetHeroOurServices";
import { GetHeroPlan } from "../../Api/Webapi/GetHeroPlan";
import { GetHeroChooseUs } from "../../Api/Webapi/GetHeroChooseus";
import { GetHeroOurteam } from "../../Api/Webapi/HeroOurteam";
import { useState } from "react";
import { Link } from "react-router";

function WebBody() {
  const [loading, setLoading] = useState(true);
  const [setHeroLoading, setSetHeroLoading] = useState(true);
  const [setServicesLoading, setSetServicesLoading] = useState(true);
  const [setPlansLoading, setSetPlansLoading] = useState(true);
  const [setChooseUsLoading, setSetChooseUsLoading] = useState(true);
  const [setTeamLoading, setSetTeamLoading] = useState(true);
  const [hero, setHero] = useState([]);
  const [services, setServices] = useState({
    maintitle: '',
    subTitle: '',
    description: '',
    mainVideo: '',
    services: []
  });
  const [plans, setPlans] = useState({
    maintitle: '',
    plan: []
  });
  const [chooseUs, setChooseUs] = useState({
    maintitle: '',
    mainImage: '',
    childImage: '',
    thirdImage: '',
    title: '',
    subTitle: '',
    details: []
  });
  const [team, setTeam] = useState({
    maintitle: '',
    teamMember: []
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  useEffect(() => {
    var fetchData = async () => {
      setSetHeroLoading(true);
      try {
        const heroData = await GetHeroSection();
        setHero(heroData);
        // setTimeout(() => {
          setSetHeroLoading(false);
        // }, 7000);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])



  useEffect(() => {
    var fetchData = async () => {
      setSetServicesLoading(true);
      try {
        const servicesData = await GetHeroOurServices();
        // console.log(servicesData); 
        setServices(servicesData || {
          maintitle: '',
          subTitle: '',
          description: '',
          mainVideo: '',
          services: []
        });
        setSetServicesLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    var fetchData = async () => {
      setSetPlansLoading(true);
      try {
        const plansData = await GetHeroPlan();
        setPlans(plansData || {
          maintitle: '',
          plan: []
        });
        setSetPlansLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    var fetchData = async () => {
      setSetChooseUsLoading(true);
      try {
        const chooseUsData = await GetHeroChooseUs();

        console.log(chooseUsData);
        setChooseUs(chooseUsData?.heroChooseUs || {
          maintitle: '',
          mainImage: '',
          childImage: '',
          thirdImage: '',
          title: '',
          subTitle: '',
          details: []
        });
        setSetChooseUsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  // useEffect(()=>{
  //   var fetchData = async()=>{
  //     setSetTeamLoading(true);
  //    try{
  //     const teamData = await GetHeroOurteam();
  //     setTeam(teamData || {
  //       maintitle: '',
  //       teamMember: []
  //     });
  //     setSetTeamLoading(false);
  //    }catch(error){
  //     console.log(error);
  //    }
  //   }
  //   fetchData()
  // },[])



















  useEffect(() => {
    const fetchData = async () => {
      try {
        setSetTeamLoading(true);
        const teamData = await GetHeroOurteam();
        setTeam(teamData?.[0]?.heroOurTeam || {
          maintitle: '',
          teamMember: []
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setSetTeamLoading(false);
      }
    };
    fetchData();
  }, []);

  if (0) {
    return (
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}


        {/* Services Section Skeleton */}


        {/* Plans Section Skeleton */}


        {/* Choose Us Section Skeleton */}

        {/* Team Section Skeleton */}

      </div>
    );
  }

  return (
    <div>
      {
        !setHeroLoading ? (
          <>
            <div className="w-full relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24">
              <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
               data-aos="zoom-in-up"
               />
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-50"
                  data-aos="zoom-in-up"
                />
                
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl tracking-tight text-white leading-tight capitalize" data-aos="zoom-in-up" data-aos-delay={900}>
                    {hero?.title}
                  </h3>
                  <h1 className="mt-6 text-2xl sm:text-3xl lg:text-6xl uppercase font-bold tracking-tight text-white leading-tight" data-aos="zoom-in-up" data-aos-delay={1000}>
                    {hero?.subTitle}
                  </h1>
                  <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-300 font-medium" data-aos="zoom-in-up" data-aos-delay={1100}>
                    {hero?.description}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row sm:justify-center items-center" data-aos="zoom-in-up" data-aos-delay={1200}>
                    <Link to={hero?.button?.link} className="bg-gradient-to-b from-custom-blue to-custom-pink text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                      {hero?.button?.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <section className="marquee">
              <div className="scroll">
                <div>
                  {hero?.marqueeList?.map((item, index) => (
                    <React.Fragment key={item._id} data-aos="zoom-in-up" data-aos-delay={1300}  >
                      <h3 className="category" data-aos="zoom-in" data-aos-delay={1400}>{item.name}</h3>
                      <h3 className="category" data-aos="zoom-in" data-aos-delay={1500}>
                        {item.icon === 'FaRegStar' ? <FaRegStar /> : <FaBox />}
                      </h3>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  {hero?.marqueeList?.map((item, index) => (
                    <React.Fragment key={item._id} data-aos="zoom-in-up" data-aos-delay={1300}  >
                      <h3 className="category" data-aos="zoom-in" data-aos-delay={1400}>{item.name}</h3>
                      <h3 className="category" data-aos="zoom-in" data-aos-delay={1500}>
                        {item.icon === 'FaRegStar' ? <FaRegStar /> : <FaBox />}
                      </h3>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

          </>
        )
          : (
            <div className="animate-pulse">

              <div className="w-full bg-gray-900 py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-4">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto"></div>
                    <div className="h-12 bg-gray-700 rounded w-5/6 mx-auto"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          )
      }



      {
        !setServicesLoading ? (
          <div className="mb-10">
            <div className="max-w-7xl w-full mx-auto pt-8 px-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left" data-aos="zoom-in" data-aos-delay={1000}>
                  :{`${services?.maintitle?.split(' ')[0]} ` || ''}
                  <span className="text-[#904064]">
                     {services?.maintitle?.split(' ')[1] || ''}
                  </span>
                  :
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Services */}
                <div>
                  {services?.services?.map((service, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start gap-4 mb-8"data-aos="fade-right" data-aos-delay={200*index} >
                      <img
                        src={service.img}
                        alt={service.title}
                        className="rounded-lg w-full sm:w-[305px] h-[200px]"
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black small">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-500 mt-1">
                          {service.description}
                        </p>
                        <Link
                          to={service.button.link}
                          className="text-[#322153] text-sm sm:text-base font-semibold mt-2 inline-flex items-center"
                        >
                          {service.button.name}
                          <span className="ml-1">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column: Hero Section */}
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small text-black leading-tight text-center md:text-left flex flex-wrap text-center" data-aos="fade-left"   >
                    {services?.subTitle?.split(' ')[0] || ''}  <span className="text-[#F97316] small mx-3">{services?.subTitle?.split(' ')[1] || ''}</span>
                    {services?.subTitle?.split(' ').slice(2).join(' ') || ''}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-500 mt-4 text-center md:text-left" data-aos="fade-left" data-aos-delay={200*1} >
                    {services?.description}
                  </p>
                  <div className="w-full mt-6 h-[280px] sm:h-[350px] md:h-[420px] bg-gray-300 rounded-lg relative overflow-hidden group" data-aos="fade-left" data-aos-delay={200*2} >
                    <video
                      ref={videoRef}
                      src={services?.mainVideo}
                      autoPlay={isPlaying}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    {/* Play/Pause Button */}
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                      {!isPlaying && (
                        <button
                          onClick={handlePlayPause}
                          aria-label="Play video"
                          className="w-16 h-16 md:w-20 md:h-20 bg-white  bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg"
                        >
                          <FaPlay style={{ color: "#D23474", fontSize: "1.5rem" }} />
                        </button>
                      )}
                      {isPlaying && (
                        <button
                          onClick={handlePlayPause}
                          aria-label="Pause video"
                          className="w-16 h-16 md:w-20 md:h-20 hidden group-hover:flex bg-white bg-opacity-40 absolute rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-30 transition-opacity duration-300"
                        >
                          <FaPause style={{ color: "#D23474", fontSize: "1.5rem" }} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div className="animate-pulse">
            <div className="max-w-7xl mx-auto py-8 px-4">
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-gray-200 rounded-lg w-full sm:w-[305px] h-[195px]"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-[420px] bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        !setPlansLoading ? (
          <div className="bg-gray-100 pt-10 pb-20 px-5">
            <div className="max-w-7xl w-full mx-auto">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left" data-aos="zoom-in" data-aos-delay={500}>
                  : {plans.maintitle?.split(' ')[0] || ''} <span className="text-[#904064]">{plans.maintitle?.split(' ').slice(1).join(' ') || ''}</span> :
                </h1>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.plan.map((plan, index) => (
                  <div key={index} className={`${index === 1 ? 'group bg-gray-900 text-white transform scale-y-[1.10]' : 'bg-white'} rounded-lg shadow-lg overflow-hidden relative`} data-aos="fade-left" data-aos-delay={200*index}>
                    <img
                      src={plan.img}
                      alt={plan.title}
                      className="w-full h-[275px] object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-[38px] noto small text-center font-semibold mb-2">
                        {plan.title}
                      </h3>
                      {/* <p className={`text-2xl text-center font-bold ${index === 1 ? 'text-orange-400' : index === 0 ? 'text-pink-500' : 'text-red-500'}`}>
              &#163;{plan.price}
                <span className={`text-base font-normal ${index === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                  /{plan.weight}
                </span>
              </p> */}
                      <div className="my-4">
                        <div className={`h-1 w-full ${index === 1 ? 'bg-gray-700' : 'bg-gray-200'} rounded-full relative`}>
                          <div className={`h-1 ${index === 1 ? 'w-3/4 bg-white' : index === 0 ? 'w-1/2 bg-gray-800' : 'w-1/4 bg-gray-800'} absolute top-0 left-0 rounded-full`}></div>
                        </div>
                      </div>
                      <ul className={`space-y-3 ${index === 1 ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                        {plan.benifits.map((benefit, i) => (
                          <li key={i} className="flex items-center" data-aos="fade-left" data-aos-delay={100*i*index}>
                            <IoCheckmarkDone style={{ marginRight: "3px" }} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      {plan.button.map((btn, i) => (
                        <button key={i} className={`mt-6 w-full ${index === 1 ? 'bg-[#F97316] hover:bg-orange-400' : 'bg-gray-800 hover:bg-gray-700'} text-white py-2 px-6 rounded-lg shadow-md transition`} data-aos="zoom-in" data-aos-delay={300*i}>
                          {btn.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-pulse">
            <div className="bg-gray-100 py-10">
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-6 space-y-4">
                      <div className="h-[275px] bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((j) => (
                          <div key={j} className="h-4 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        !setChooseUsLoading ? (

          <div className="bg-[#111827]">
            <div className="max-w-7xl w-full mx-auto px-4 py-8">
              {/* <!-- Header Section --> */}
              <div>
                <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left" data-aos="zoom-in" data-aos-delay={100}> 
                  : {chooseUs.maintitle?.split(' ')[0]} <span className="text-[#904064]">{chooseUs.maintitle?.split(' ').slice(1).join(' ')}</span> :
                </h1>
              </div>
              {/* <!-- Main Content Section --> */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* <!-- Images Section --> */}
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden" data-aos="zoom-in"  data-aos-delay={500*0}>
                    <img src={chooseUs.mainImage} alt="Main Image" className="w-full"  />
                  </div>
                  <div className="flex gap-4">
                    <div className="rounded-lg overflow-hidden" data-aos="zoom-in" data-aos-delay={500*2} >
                      <img
                        src={chooseUs.childImage}
                        alt="Child Image"
                        className="w-56"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden" data-aos="zoom-in" data-aos-delay={500*1} >
                      <img src={chooseUs.thirdImage} alt="Third Image" className="w-full" />
                    </div>
                  </div>
                </div>

                {/* <!-- Text Content Section --> */}
                <div>
                  <h3 className="text-4xl font-bold leading-snug text-white ms-4" data-aos="fade-left" data-aos-delay={500}>
                    {chooseUs.title.split(' ').slice(0, 2).join(' ')} <span className="text-[#F97316]">{chooseUs.title.split(' ')[2]}</span>
                    {chooseUs.title.split(' ').slice(3, chooseUs.title.split(' ').length).join(' ')}
                  </h3>
                  <p className="mt-4 text-gray-400 leading-relaxed ms-4" data-aos="fade-left" data-aos-delay={500*1.5}>
                    {chooseUs.subTitle}
                  </p>

                  {/* <!-- Features Section --> */}
                  <div className="grid grid-cols-2 gap-5 mt-8">
                    {chooseUs.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-4" data-aos="fade-left" data-aos-delay={500*(index+1)}  >
                        <div className="text-[#F97316] text-4xl w-[50px]">
                          <img src={detail.img} alt={detail.title} className="w-full" />
                        </div>
                        <div className="w-full" >
                          <h4 className="text-lg font-semibold text-white noto small">
                            {detail.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                            {detail.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div className="animate-pulse">
            <div className="bg-[#111827] py-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-10 bg-gray-700 rounded w-1/3 mb-8"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="h-[300px] bg-gray-700 rounded"></div>
                    <div className="flex gap-4">
                      <div className="h-[150px] w-56 bg-gray-700 rounded"></div>
                      <div className="h-[150px] flex-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-8 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="grid grid-cols-2 gap-5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                          <div className="h-12 w-12 bg-gray-700 rounded"></div>
                          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-700 rounded w-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }



      {
        !setTeamLoading ? (

          <div className="max-w-7xl w-full mx-auto bg-white py-10 px-6 " >
            {/* Section Heading */}
            <div className="mb-12 text-center" data-aos="zoom-in" >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold small mt-4 mb-10 text-center sm:text-left">
                : {team.maintitle?.split(' ')[0]} <span className="text-[#904064]">{team.maintitle?.split(' ').slice(1).join(' ')}</span> :
              </h1>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {team.teamMember.map((member, index) => (
                <div key={member._id} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={300*index}>
                  <div className={`w-48 md:w-56 bg-gray-200 rounded-t-full overflow-hidden`}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>

        ) : (
          <div className="animate-pulse">
            <div className="max-w-7xl mx-auto py-10 px-6">
              <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-4">
                    <div className="w-48 md:w-56 h-56 bg-gray-200 rounded-t-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      }
     {/* <img src="https://sterlingplusone-backend-1.onrender.com/imageStore/icon123.png" alt="" />  */}
    </div>
  );
}

export default WebBody;
