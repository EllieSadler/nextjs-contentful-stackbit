import { Button } from './Button.jsx';

export const Banner = (props) => {
  return (
    <div className="px-8 py-12 bg-teal-200 md:py-10" data-sb-object-id={props.id}>
      <div className={`mx-auto max-w-6xl text-center md:flex md:text-left md:justify-between md:items-center md:gap-2`}>
        <h2 className="mb-6 text-3xl leading-tight md:mb-0" data-sb-field-path="heading">{props.heading}</h2>
        {props.button && <Button {...props.button} />}
      </div>
    </div>
  );
};
