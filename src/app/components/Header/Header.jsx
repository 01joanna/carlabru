"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <header className="pt-10 pb-40 h-40 w-7/7 flex flex-col text-xs tracking-widest px-20 sticky z-50 top-0 bg-white">
            <div className="flex justify-between w-6/7">
                <div className="w-1/2 -ml-10">
                    <p>
                        Carla Bru is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum ipsum quis sit odio perferendis itaque fugiat ad natus unde. Ratione
                        cupiditate obcaecati tenetur delectus vero omnis temporibus commodi inventore eveniet.
                    </p>

                    {/* Fade-up animación */}
                    <AnimatePresence>
                        {showInfo && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mt-2 pb-20"
                            >
                                <p className="text-sm">
                                    Karla Bru nació en algún lugar, estudió tal y cual. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Morbi nec orci quis lorem tincidunt ultrices non non lacus.
                                </p>
                                <p className="text-sm mt-2">
                                    Este texto es información adicional sobre el trabajo, visión artística, etc.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="w-1/2 flex justify-between">
                    <div>buendia@carlabru.com</div>
                    <div className="flex gap-4">
                        <a
                            href={"/"}
                            className="cursor-pointer underline"
                        >(Home)</a>
                        <a
                            className="cursor-pointer underline"
                            onClick={() => setShowInfo(!showInfo)}
                        >
                            (Information)
                        </a>
                        <a
                        href={'./projects'} 
                        className="cursor-pointer underline">
                            (Projects)
                        </a>
                        <a>ES / EN</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
