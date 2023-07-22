import React, { useState } from 'react';
import project2Image from '../images/profile-pic.jpg';
import ProjectDetails from './ProjectDetails';

const projects = [
    {
        name: 'ImagAIne',
        image:
            'https://play-lh.googleusercontent.com/HFCUOirkviIr4U6zAecT-nNf_AvTmdF41cLbKSqgtNCJjovF8IojplyQ20LS8sHBGck=h512-rw',
        year: 2022,
        description: 'ImagAIne gives you the option to use a certain style for your image. Dozens of styles and media are available, use them for inspiration. These are fully optional but can help you to get going. And you might find out a few new styles!',
        mycontribution: 'Engineered a comprehensive application with intricate designs and seamless API integration. Leveraged advanced stable diffusion machine learning models in the backend to process user input (text/image) and deliver corresponding enhanced images via API.',
        android: 'https://play.google.com/store/apps/details?id=com.sparklingapps.imagaine',
        ios: 'https://apps.apple.com/us/app/imagaine/id6443654596',
        web: 'https://imagaineapp.com/'
    },
    {
        name: 'VoiceArt',
        image:
            'https://play-lh.googleusercontent.com/vjtu6k7SV1WHjIYL0Ccbbrjq8grekYN33sXUh1HyLnR4AqhgQSuFWacXsYtO-DFGTkY=h512-rw',
        year: 2022,
        description: 'VoiceArt generates any type of image based on what you tell it with your voice. It creates artistic impressions using the best models of stable diffusion. After you generate the image, you can give VoiceArt additional instructions to adjust the image further.',
        mycontribution: 'I created a comprehensive application with intricate designs and seamless API integration. The backend I developed processes user input in the form of text using stable diffusion-based machine learning models. The application then returns images through an API, providing a unique and efficient user experience.',
        android: 'https://play.google.com/store/apps/details?id=com.sparklingapps.voiceart',
        ios: 'https://apps.apple.com/app/voiceart/id1635947799'
    },
    {
        name: 'UpscaleAI',
        image:
            'https://play-lh.googleusercontent.com/BVaVCVJBgjJ3X15K3kAVXTyuufZfQS6NFU1PxMvz319IDHHIQEniNBc7m6eDm-xehts=h512-rw',
        year: 2023,
        description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
        mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
        android: 'https://play.google.com/store/apps/details?id=com.sparklingapps.voiceart',
        ios: 'https://apps.apple.com/app/voiceart/id1635947799',
        web: 'https://sparklingapps.com/upscale/'
    },
    {
        name: 'SketchAI',
        image:
            'https://play-lh.googleusercontent.com/aON_smqx9RuQmlGqsul2Nh6V4WYQDP9ewoHdP7h6Tnn8roHMoVk_DpQ7gUREsx3kopGP=h512-rw',
        year: 2023,
        description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
        mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
        android: 'https://play.google.com/store/apps/details?id=com.sparklingapps.sketchai',
    },
    {
        name: 'Print Glasses',
        image:
            'https://raw.githubusercontent.com/androidsparkling/VuzixArabic/main/app/src/main/ic_launcher-playstore.png?token=GHSAT0AAAAAACC6JHU2BC6KTQJJVS4LFEOWZFWNH3A',
        year: 2023,
        description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
        mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    },
    {
        name: 'AirBeamTV',
        image:
            'https://play-lh.googleusercontent.com/6Du52C6IxDwW_phBXe3JCaJycUg-BPgqn7BBUoRWDYS_qguMa7Yp1pwaLidmwZl16ls=s512-rw',
        year: 2021,
        description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
        mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    },
    // {
    //     name: 'Roku Screen Mirroring + Cast',
    //     image:
    //         'https://play-lh.googleusercontent.com/WkxElsGsZBhLnJxH5gJkbVUuUgKxxhH44Dsxw4saO77sgYvc7bwxJ_mIMKxSbovZ5Q=h512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // },
    // {
    //     name: 'Fire TV & Firestick Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/bceiEPz_A1Y0i9M8uCdRipc-qLnVT78PO8p1PdisnCtCMh3jwu_JbvJ6yq-AOeVSF3QM=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // },
    // {
    //     name: 'Screen Mirroring Samsung TV',
    //     image:
    //         'https://play-lh.googleusercontent.com/eQcMy7PRlQYewqc3Y7IrmSNXC8Smt2h_4BLvZpsuDePjr62f5_-uQmXMyhWkz1RLxu4=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // },
    // {
    //     name: 'LG TV Cast & Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/RXeDeR-903JNnyGlCENM3qP4A2NfzlCuXoOhJ6R7vTyu9haoCiKKm1YKfRABegOeBA=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // },
    // {
    //     name: 'Hisense TV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/Lga8uLtCNmH71VTY5Gr7Q3SEfhe7N3ZuOcDwN_MdYWNxfTcJlE-UOQRBqfhI4LERLQ=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'TCL TV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/6gl6pUZO9d9ZBYUU9rxN9V-R31o8D2ujvIjZycCBzqf2FrxSrw1sgoPEPaOlbT1KzI5N=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'Philips TV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/Xa4-jAu-fRmG9nWFqsNzM8bhZGIAFaU6ucas35rSLT6VjZk_AdaFfW9ZD6uxFYcBkw=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'Panasonic TV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/VrdGiWpyu4HnScfMkiCvzKy3sy56xbBYe8I9N5lsNHGafV5BI6GUGqqLm1bo6DbOpCHs=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'Sony TV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/RjYPpVWDHhtB5PTgG-QTFclE5jOKNbChTf4EQTvroWElxsjF2wLxaXu0cSE2Sj49CVE=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'Chromecast Screen Mirroring TV',
    //     image:
    //         'https://play-lh.googleusercontent.com/MjqOAOPFfcMDXY8FdmT_pgu7wOCIG9t-xd-YylTb9CcjVOEKhlQT47zcWxkOAlvBmQ=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // }, {
    //     name: 'AirBeamTV Screen Mirroring',
    //     image:
    //         'https://play-lh.googleusercontent.com/kPLwzRZF9fU292E90VPDcnJV8qjhH2L99J1WxM60ULQ5hcz1D1pEBTma-_eEy2N_4Dg=s512-rw',
    //     year: 2023,
    //     description: 'UpscaleAI is an innovative app designed to help you enhance the quality of your images quickly and easily. With its powerful AI-based algorithms, this app can upscale your images up to 16 times their original size with just a few clicks.',
    //     mycontribution: 'Designed an integrated application with sophisticated designs and API integration. Implemented backend image processing using Real-ESRGAN to upscale user images by 2x, 4x, 8x, and 16x. Resulting enhanced images are returned via API for improved visual quality.',
    // },
    // Add more projects as needed
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="mt-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                            onClick={() => openProjectDetails(project)}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-center">
                                    {project.name} ({project.year})
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <ProjectDetails project={selectedProject} onClose={closeProjectDetails} />
            )}
        </section>
    );
};

export default Projects;