"use client";

import { useState } from "react";

import { Translate } from "@phosphor-icons/react";

import GoogleTranslator from "@/components/language/googleTranslator/Component";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = ({ className }: { className?: string }) => {
    const [showTranslate, setShowTranslate] = useState(false);
    return (
        <div
            className={`relative flex flex-col items-center justify-center space-x-2 text-center hover:bg-inherit md:flex-row ${className}`}
        >
            <div>
                <Button
                    className="flex text-sm text-blue-500 hover:bg-none hover:text-blue-500"
                    variant="ghost"
                    disabled={showTranslate}
                    onClick={() => setShowTranslate(true)}
                    type="button"
                >
                    <Translate className="mx-1 h-6 w-6" color="#4689F6" />
                    Change Language
                </Button>
            </div>
            <div>
                <GoogleTranslator show={showTranslate} />
            </div>
        </div>
    );
};

export default LanguageSwitcher;
