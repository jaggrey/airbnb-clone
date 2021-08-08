import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative h-96 min-w-[300px]">
      <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
    </div>
  );
};

export default LargeCard;
