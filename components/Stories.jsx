import Image from 'next/image';

export const Stories = (props) => {
  return (
    <div className="px-8 my-20" data-sb-object-id={props.id}>
      <div className="mx-auto max-w-2xl md:flex md:justify-center md:gap-2.5">
        {props.stories?.length && props.stories.map((story, i) => (
          <StoryItem key={i} {...story} />
        ))}
      </div>
    </div>
  );
};

const StoryItem = (props) => {
  return (
    <a href={props.url} className="hover:text-slate-500 font-medium flex items-center gap-2.5 my-8 md:flex-1 md:flex-col md:text-center md:max-w-sm md:my-0 md:gap-3" data-sb-object-id={props.id}>
      <div className="relative rounded-full overflow-hidden w-16 flex-none before:pb-100p before:block md:w-thumbnail">
        {props.image?.src && (
          <Image src={props.image.src} alt={props.image.alt} layout="fill" objectFit="cover" data-sb-field-path="image" />
        )}
      </div>
      <div className="flex-auto">
        <p className="font-serif text-sm mb-1.5" data-sb-field-path="title">{props.title}</p>
        <p className="text-xs">
          Read the Story
          <svg className="inline-block ml-2.5" width="28px" height="28px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" >
            <circle r="14" cy="14" cx="14" fill="#d51900" />
            <path d="m15.8,13.57899l-4.24264,4.24264l1.41421,1.41421l4.94975,-4.94975l0.70711,-0.70711l-5.65685,-5.65685l-1.41421,1.41421l4.24264,4.24264l-0.00001,0.00001z" fill="#ffffff" />
          </svg>
        </p>
      </div>
    </a>
  );
};
