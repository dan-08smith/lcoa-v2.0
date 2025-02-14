import Image from "next/image";

interface PersonCardProps {
    name: string;
    role: string;
    image: string; // URL for the placeholder image
    description: string;
  }
  
  export default function PersonCard({ name, role, image, description }: PersonCardProps) {
    return (
      <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
        <Image src={image} alt={name} width={128} height={128} className="w-32 h-32 object-cover rounded-full mb-4"/>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 font-semibold">{role}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  }  