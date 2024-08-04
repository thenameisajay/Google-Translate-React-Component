import Image from "next/image";
import Link from "next/link";

import { GithubLogo, Translate } from "@phosphor-icons/react/dist/ssr";

import LanguageSwitcher from "@/components/language/Component";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="flex min-h-dvh flex-col">
            <header className="flex h-14 items-center px-4 lg:px-6">
                <Link
                    href="#"
                    className="flex items-center justify-center"
                    prefetch={false}
                >
                    <Translate className="size-6" />
                    <span className="sr-only">Translate Language Switcher</span>
                </Link>
            </header>
            <main className="flex-1">
                <section className="w-full border-y pt-12">
                    <div className="space-y-10 px-4 py-4 md:px-6 xl:space-y-16">
                        <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Translate Your Content Effortlessly
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    The powerful translation feature makes it
                                    easy to reach a global audience. With just a
                                    click, your content can be translated into
                                    multiple languages.
                                </p>
                                <LanguageSwitcher className="mt-6" />
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <Image
                                    src="/home_page_image.webp"
                                    width={500}
                                    height={300}
                                    quality={100}
                                    alt="Google Translate Language Switcher Home Page Image"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Translate Any Language
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The translation feature supports over 50+
                                    languages, making it easy to reach a global
                                    audience.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>English</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        The quick brown fox jumps over the lazy
                                        dog. This is a sample sentence in
                                        English.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>Español</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        El zorro marrón rápido salta sobre el
                                        perro perezoso. Esta es una oración de
                                        muestra en español.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>中文</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        敏捷的棕色狐狸跳过懒惰的狗。这是一个中文示例句子。
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>Français</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Le renard brun rapide saute par-dessus
                                        le chien paresseux. Ceci est une phrase
                                        d&apos;exemple en français.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>Deutsch</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Der schnelle braune Fuchs springt über
                                        den faulen Hund. Dies ist ein
                                        Beispielsatz auf Deutsch.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle>日本語</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        素早い茶色の狐が怠惰な犬を飛び越える。これは日本語の例文です。
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
                <p className="text-xs text-muted-foreground">
                    &copy; 2024 Translate Language Switcher App. All rights
                    reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        href="https://github.com/thenameisajay/Google-Translate-Language-Switcher"
                        className="flex text-xs underline-offset-4 hover:text-blue-500 hover:underline"
                        prefetch={false}
                    >
                        <Button
                            type="button"
                            className="flex text-sm text-blue-500 hover:bg-none hover:text-blue-500"
                            variant="ghost"
                        >
                            <span>
                                <GithubLogo className="mr-1 h-5 w-6" />
                            </span>

                            <span>View on Github</span>
                        </Button>
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
