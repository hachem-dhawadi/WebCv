import Image from "next/image";

const services = [
  {
    title: "React js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium",
    image: "/images/services/laravel.png",
    alt: "100",
    size:200
  },
  {
    title: "Angular",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Java Fx",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Node js",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Laravel",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/LARAVEL.PNG",
    alt: "Service description",
    size:200
  },
  {
    title: "Symfony",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "React Native",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Flutter",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Flutter Flow",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Mongodb",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Mysql",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
    alt: "Service description",
    size:100
  },
  {
    title: "Firebase",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/mysql.png",
    alt: "Service description",
    size:80
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
     {/*} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">COMPÉTENCES </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Halley is consectetur Obcaecati veniam explicabo perspiciatis sapiente
          saepe sequi atque aut ullam aliquam.
        </p>
      </div>*/}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt,size }) => (
          <div key={title}>
            {/*<div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={size}
                height={100}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>*/}
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
