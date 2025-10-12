import Image from "next/image";
import Link from "next/link";

const customers = [
    {
        name: "google-play",
        href: "https://react.dev/",
        src: "/images/customers/rj.png",
        alt: "Google play logo",
    },
    {
        name: "github",
        href: "https://angular.dev/",
        src: "/images/customers/ang.png",
        alt: "Github logo",
    },
    {
        name: "docker",
        href: "https://www.oracle.com/java/",
        src: "/images/customers/java.png",
        alt: "Docker logo",
    },
    {
        name: "python",
        href: "https://nodejs.org/fr",
        src: "/images/customers/node.png",
        alt: "Python logo",
    },
    {
        name: "slack",
        href: "https://laravel.com/",
        src: "/images/customers/laravel.png",
        alt: "Slack logo",
    },
    {
        name: "discord",
        href: "https://symfony.com/",
        src: "/images/customers/sf.png",
        alt: "Discord logo",
    },
    {
        name: "google-play",
        href: "https://reactnative.dev/",
        src: "/images/customers/rn.png",
        alt: "Google play logo",
    },
    {
        name: "github",
        href: "https://flutter.dev/",
        src: "/images/customers/fl.png",
        alt: "Github logo",
    },
    {
        name: "docker",
        href: "https://flutterflow.io/",
        src: "/images/customers/flow.png",
        alt: "Docker logo",
    },
    {
        name: "python",
        href: "https://www.mongodb.com/",
        src: "/images/customers/mongo.png",
        alt: "Python logo",
    },
    {
        name: "slack",
        href: "https://www.mysql.com/fr/",
        src: "/images/customers/ms.png",
        alt: "Slack logo",
    },
    {
        name: "discord",
        href: "https://firebase.google.com/",
        src: "/images/customers/firebase.png",
        alt: "Discord logo",
    },
    {
        name: "slack",
        href: "https://www.docker.com/",
        src: "/images/customers/docker.png",
        alt: "Slack logo",
    },
        {
        name: "slack",
        href: "https://www.atlassian.com/fr/software/jira",
        src: "/images/customers/jir.png",
        alt: "Slack logo",
    },
                {
        name: "discord",
        href: "https://www.atlassian.com/",
        src: "/images/customers/confluence.png",
        alt: "Discord logo",
    },
        {
        name: "slack",
        href: "https://github.com/",
        src: "/images/customers/gito.png",
        alt: "Slack logo",
    },
        {
        name: "slack",
        href: "https://www.c-language.org/",
        src: "/images/customers/c.png",
        alt: "Slack logo",
    },
        {
        name: "slack",
        href: "https://isocpp.org/",
        src: "/images/customers/c+++.png",
        alt: "Slack logo",
    },
        {
        name: "slack",
        href: "https://www.arduino.cc/",
        src: "/images/customers/arduino.png",
        alt: "Slack logo",
    },
            {
        name: "discord",
        href: "https://www.python.org/",
        src: "/images/customers/py.png",
        alt: "Discord logo",
    },
            {
        name: "discord",
        href: "https://docs.ros.org/en/humble/index.html",
        src: "/images/customers/ros22.png",
        alt: "Discord logo",
    },


]

export default function Customers() {
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">
                Skills
            </h2>

            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">

            </p>
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {customers.map((item) => (
                        <Link key={item.name} href={item.href} target="_blank">
                            <Image
                                className="h-12 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                                src={item.src}
                                alt={item.alt}
                                width={150}
                                height={150}
                                quality={75}
                                sizes="100vw"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}

