import { StarProps } from "./star.props";

const Star: React.FC<StarProps> = ({
  isFilled = false,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  tabIndex,
  ...props
}: StarProps) => {
  return (
    <span 
      data-testid={isFilled ? 'star-filled' : 'star-unfilled'}
      className={`star ${isFilled ? 'filled' : ''} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex} >
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill={isFilled ? '#FD7E14' : '#212121'}
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.4713 17.739C13.649 17.8405 13.8521 17.9167 14.0807 17.9167C14.4107 17.9167 14.7662 17.7643 14.9693 17.485C15.1725 17.2057 15.2486 16.8503 15.1725 16.5202L14.1314 12.0768C14.1314 12.0261 14.1568 11.9753 14.1822 11.9499L17.5084 8.9538C17.8639 8.64911 17.9908 8.16669 17.8385 7.73505C17.6861 7.30341 17.3053 6.99872 16.8482 6.97333L12.5572 6.64325C12.5064 6.64325 12.481 6.61786 12.4557 6.56708L10.856 2.40302C10.6783 1.94598 10.2721 1.66669 9.78964 1.66669C9.30722 1.66669 8.90097 1.94598 8.69785 2.40302L7.09824 6.56708C7.07285 6.61786 7.04746 6.64325 6.99667 6.64325L2.70566 6.97333C2.24863 6.99872 1.86777 7.30341 1.71542 7.73505C1.58847 8.16669 1.71542 8.64911 2.0455 8.9538L5.37167 11.9499C5.42246 11.9753 5.42246 12.0261 5.42246 12.0768L4.40683 16.5202C4.30527 16.8503 4.38144 17.2057 4.60996 17.485C4.81308 17.7643 5.14316 17.9167 5.49863 17.9167C5.72714 17.9167 5.93027 17.8405 6.13339 17.739L9.73886 15.3776C9.78964 15.3522 9.81503 15.3522 9.86582 15.3776L13.4713 17.739Z'
          fill={isFilled ? '#FD7E14' : 'none'}
          stroke={isFilled ? '#FD7E14' : '#212121'}
        />
      </svg>
    </span>
  );
};

export default Star;
