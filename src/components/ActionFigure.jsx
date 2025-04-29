
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";
import Scene from "./Scene";
import TextCanvas from "./TextCanvas";
import { Stars } from "@react-three/drei";

const ActionFigure = () => {
    const mainRef = useRef(null);
    const sceneRef = useRef(null);

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Put your scroll trigger animations here if needed

        //combile multiple animation in one continuously switch between one another
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    setProgress(self.progress);
                }
            }
        })
            .to(sceneRef.current, {
                ease: 'none',
                x: '-25vw',
                y: '100vh'
            })
            .to(sceneRef.current, {
                ease: 'none',
                x: '25vw',
                y: '200vh'
            })
            .to(sceneRef.current, {
                ease: 'none',
                x: '-25vw',
                y: '300vh'
            })
            .to(sceneRef.current, {
                ease: 'none',
                x: '25vw',
                y: '400vh'
            })
    }, []);

    return (
        <div ref={mainRef} className="overflow-x-hidden bg-[#181818]">
            <div className="text-white text-center absolute top-0 left-0 w-full h-[500vh] font-bold">
                <Canvas camera={{ position: [0, 0, 10] }}>
                    <Stars factor={4} depth={10} count={2000} speed={5} saturation={0} />
                </Canvas>
            </div>
            <div className=" absolute flex items-end justify-center top-0 left-0 w-full h-[110vh] font-bold">
                <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
                    Services We Provide
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <section className="relative grid place-items-center h-[100vh]">
                    <div className="text-white text-center absolute -top-[35%] mx-4 w-screen h-screen font-bold">
                        <TextCanvas text={'NEOVERSINE'} pos={[0, 0, 10]} />
                    </div>


                    <div ref={sceneRef} className="z-10 h-[100vh] w-[100vw]">

                        <Canvas>
                            <Scene progress={progress} />
                        </Canvas>
                    </div>
                </section>

                <section className="relative flex items-center justify-evenly h-[100vh]">
                    <p className="w-[50%] border-0 border-red-700"></p>

                    <div className="text-white/80 w-[50%] text-center px-10 text-lg font-semibold">
                        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-2">
                            Lead Gen & Enrichment Bot
                        </p>
                        <span className="text-xl">Why It's Top:</span> It captures leads and enriches them with verified data—automating your pipeline's most tedious step. Focuses your sales team on hot leads only.
                    </div>
                </section>

                <section className="relative flex items-center justify-evenly h-[100vh]">
                    <div className="text-white/80 w-[50%] text-center px-10 text-lg font-semibold">
                        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500 mb-2">
                            AI Social Media Scheduler
                        </p>

                        <span className="text-xl">Why It's Top:</span> It creates, personalizes, and schedules posts across all platforms—your always-on content team. Keeps you active even when you're offline.
                    </div>
                    <p className="w-[50%] border-0 border-red-700"></p>


                </section>

                <section className="relative flex items-center justify-evenly h-[100vh]">
                    <p className="w-[50%] border-0 border-red-700">
                    </p>

                    <div className="text-white/80 w-[50%] text-center px-10 text-lg font-semibold">
                        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                            Automate Blog Content Creation with GPT-4 & WordPress
                        </p>

                        <span className="text-xl">Why It's Top:</span> It automates a core content marketing function end-to-end—from creation to publishing—making it a no-brainer for startups, solopreneurs, and agencies alike. Doubles your output with half the effort.
                    </div>
                </section>

                <section className="relative flex items-center justify-evenly h-[100vh]">
                    <div className="text-white/80 w-[50%] text-center px-10 text-lg font-semibold">
                        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-400 mb-2">
                            SEO Content Generator with Perplexity
                        </p>

                        <span className="text-xl">Why It's Top:</span> It researches, writes, and optimizes SEO-rich content with real-time data—ideal for ranking quickly. Cuts writing time by over 70%.
                    </div>
                    <p className="w-[50%] border-0 border-red-700"></p>


                </section>
            </Suspense>
        </div>
    );
};

export default ActionFigure;
